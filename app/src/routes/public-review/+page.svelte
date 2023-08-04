<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	export let data;
    console.log(data.projects)
</script>

<section>

	<h1>Public Review</h1>
    <div class="projects">
	{#if data.projects.length}
		{#each data.projects as project}
		<div class="project">
			<img
				class=""
				src={urlFor(project.image).url()}
				alt=""
			/>
			<div>
				<h2>{project.title}</h2>
				{#each project.public_documents as doc}
					<a href="{doc.url}">{doc.label}</a>
				{/each}
			</div>

		</div>
		{/each}
	{/if}
    </div>
</section>
<style>
	h1 {
		padding: 180px 60px 40px;
		font-style: italic;
		font-size: 3rem;
		color: var(--dark-brown);
	}
	.projects {
		background: var(--light-brown);
		padding: 60px;
	}
	.project {
		margin-bottom: 60px;
		display: flex;
		gap: 20px;
	}
	.project h2 {
		font-family: var(--font-family-serif);
		font-weight: normal;
		font-size: 1.4rem;
		text-transform: uppercase;
		margin-bottom: 20px;
	}
	.project img {
		width: 200px;
		border-radius: 6px;
	}
	.project a {
		font-family: var(--font-family-sans);
		font-weight: normal;
		display: block;
		margin: 10px 0;
	}
</style>