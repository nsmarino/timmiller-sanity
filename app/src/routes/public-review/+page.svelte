<script lang="ts">
	import { imageUrl } from '$lib/utils/image';
	export let data;
    console.log(data.projects)

	// Split off the last word so it can be kept on the same line as the arrow
	function splitTitle(title: string | undefined) {
		const words = (title ?? '').trim().split(/\s+/);
		const last = words.pop() ?? '';
		return { lead: words.length ? words.join(' ') + ' ' : '', last };
	}

	let query = '';

	// Case- and accent-insensitive; every typed word must appear in the title or a service name
	const normalize = (text: string) =>
		text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

	let searchIndex: { project: any; text: string }[];
	$: searchIndex = (data.projects ?? []).map((project: any) => ({
		project,
		text: normalize(
			[project.title, ...(project.services_rendered ?? []).map((s: any) => s?.title)]
				.filter(Boolean)
				.join(' ')
		)
	}));
	$: terms = normalize(query).split(/\s+/).filter(Boolean);
	$: filtered = terms.length
		? searchIndex.filter(({ text }) => terms.every((t) => text.includes(t))).map((e) => e.project)
		: (data.projects ?? []);
</script>

<section>

	<h1>Public Review</h1>

	{#if data.projects?.length}
		<div class="search">
			<label class="visually-hidden" for="project-search">Search projects</label>
			<div class="search-field">
			<svg class="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
				<circle cx="8.5" cy="8.5" r="6" />
				<path d="M13 13l5 5" />
			</svg>
			<input
				id="project-search"
				type="search"
				placeholder="Search projects"
				autocomplete="off"
				bind:value={query}
			/>
			</div>
			<p class="result-count" aria-live="polite">
				{#if terms.length}
					{filtered.length} of {data.projects.length} projects
				{/if}
			</p>
		</div>
	{/if}

    <div class="projects">
	{#if terms.length && !filtered.length}
		<p class="no-results">
			No projects match “{query.trim()}”.
			<button type="button" on:click={() => (query = '')}>Clear search</button>
		</p>
	{/if}
	{#if filtered.length}
		{#each filtered as project (project._id)}
		{@const title = splitTitle(project.title)}
		<div class="project">
			{#if imageUrl(project.image)}
				<img
					src={imageUrl(project.image)}
					alt=""
				/>
			{/if}
			<div>
				<h2>
					<a class="project-link" href="projects/{project.slug.current}"
						><span class="title">{title.lead}</span><span class="nowrap"
							><span class="title">{title.last}</span>&nbsp;<svg
							class="arrow"
							viewBox="0 0 24 12"
							fill="none"
							stroke="currentColor"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
							><path d="M1 6h21M17 1l5 5-5 5" /></svg
						></span
					></a
					>
				</h2>
				{#if project.services_rendered}
					{#each project.services_rendered as serviceRef}
						{#if serviceRef?.slug?.current}
							<a class="service-link" href="/services/{serviceRef.slug.current}">{serviceRef.title}</a>
						{/if}
					{/each}
				{/if}

				<!--  
				{#each project.public_documents as doc}
					{#if doc.url} 
						<a class="doc-link" href="{doc.url}" target="_blank">{doc.label}</a>
					{:else}
						<h3>{doc.label}</h3>
					{/if}
				{/each}
				-->
			</div>

		</div>
		{/each}
	{/if}
    </div>
</section>
<style>
	h1 {
		padding: 180px 60px 20px;
		font-style: italic;
		font-size: 3rem;
		color: var(--dark-brown);
	}
	.projects {
		background: var(--light-brown);
		padding: 60px;
	}
	.search {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 12px 20px;
		padding: 0 60px 30px;
	}
	.search-field {
		position: relative;
		flex: 0 1 420px;
	}
	.search input {
		width: 100%;
		box-sizing: border-box;
		padding: 12px 16px 12px 44px;
		font-family: var(--font-family-sans);
		font-size: 1rem;
		color: var(--dark-brown);
		background: var(--off-white);
		border: 1px solid var(--dark-brown);
		border-radius: 6px;
		appearance: none;
	}
	.search input::placeholder {
		color: var(--mid-brown);
		opacity: 0.7;
	}
	.search input:focus-visible {
		outline: 2px solid var(--green);
		outline-offset: 2px;
	}
	.search-icon {
		position: absolute;
		left: 16px;
		top: 50%;
		transform: translateY(-50%);
		width: 18px;
		height: 18px;
		color: var(--mid-brown);
		pointer-events: none;
	}
	.result-count {
		font-family: var(--font-family-sans);
		font-size: 0.8rem;
		color: var(--mid-brown);
	}
	.no-results {
		font-family: var(--font-family-sans);
		color: var(--dark-brown);
	}
	.no-results button {
		margin-left: 8px;
		padding: 0;
		font: inherit;
		color: inherit;
		background: none;
		border: none;
		text-decoration: underline;
		text-underline-offset: 3px;
		cursor: pointer;
	}
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}
	/* Spacing is padding, not margin, so the stretched link fills the full band between dividers.
	   Top is 3px lighter to offset the serif's built-in space above ascenders and the underline
	   below the baseline, so the visible title (ink + underline) sits centered. */
	.project {
		position: relative;
		padding: 27px 0 33px;
		border-bottom: 2px solid var(--light-blue);
		display: flex;
		align-items: center;
		gap: 40px;
		color: var(--dark-brown);

	}
	.project:first-child {
		padding-top: 0;
	}
	.project:last-child {
		margin-bottom: 30px;
	}
	.project h2 {
		font-family: var(--font-family-serif);
		color: var(--dark-brown);
		font-size: 1.6rem;
		font-style: italic;
	}
	/* Only space the title from service tags when there are some, so rows stay vertically centered */
	.project h2:not(:last-child) {
		margin-bottom: 20px;
	}
	.project-link {
		text-decoration: none;
	}
	/* Stretch the title link over the whole row so the image and blank space are clickable too */
	.project-link::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 6px;
	}
	.project-link .nowrap {
		white-space: nowrap;
	}
	.project-link .title {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.2em;
		text-decoration-color: color-mix(in srgb, currentColor 35%, transparent);
	}
	.project-link .arrow {
		display: inline-block;
		width: 0.9em;
		height: 0.45em;
		vertical-align: 0.15em;
		margin-left: 0.15em;
	}
	@media (hover: hover) {
		.project-link,
		.project-link .title,
		.project-link .arrow {
			transition:
				color 0.2s ease,
				text-decoration-color 0.2s ease,
				transform 0.2s ease;
		}
		.project:hover .project-link {
			color: var(--green);
		}
		.project:hover .project-link .title {
			text-decoration-color: currentColor;
		}
		.project:hover .project-link .arrow {
			transform: translateX(6px);
		}
		/* Hovering a service tag targets the tag, not the row */
		.project:has(.service-link:hover) .project-link {
			color: inherit;
		}
		.project:has(.service-link:hover) .project-link .title {
			text-decoration-color: color-mix(in srgb, currentColor 35%, transparent);
		}
		.project:has(.service-link:hover) .project-link .arrow {
			transform: none;
		}
	}
	.project-link:focus-visible {
		outline: none;
	}
	.project-link:focus-visible::after {
		outline: 2px solid var(--green);
		outline-offset: 4px;
	}
	.project h3 {
		font-family: var(--font-family-sans);
		font-weight: bold;
		font-size: 1rem;
		margin: 40px 0 20px;
	}
	.project img {
		width: 120px;
		height: 80px;
		object-fit: cover;
		border-radius: 6px;
	}
	.project .doc-link {
		font-family: var(--font-family-sans);
		font-weight: normal;
		display: block;
		margin: 10px 0;
	}
	.project .service-link {
		position: relative;
		z-index: 1;
		font-family: var(--font-family-sans);
		padding: 2px 8px;
		background: var(--light-blue);
		border: 1px solid var(--dark-brown);
		font-size: 0.8rem;
		text-decoration: none;
		border-radius: 6px;
		margin-right: 8px;
	}	
	@media (max-width: 800px) {
		h1 {
			padding: 120px 20px 20px;
		}
		.projects {
			padding: 20px;
		}
		.search {
			padding: 0 20px 20px;
		}
		.search-field {
			flex-basis: 100%;
		}
		.project {
			flex-direction: column;
			align-items: stretch;
		}
		.project .service-link {
			font-size: 0.8rem;
			display: block;
			max-width: fit-content;
			margin-bottom: 20px;
		}
		.project img {
			width: 100%;
			height: 200px;
			object-fit: cover;
			border-radius: 6px;
		}
	}
</style>