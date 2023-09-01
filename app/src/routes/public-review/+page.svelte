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
			{#if project.image}
				<img
					class=""
					src={urlFor(project.image).url()}
					alt=""
				/>
			{/if}
			<div>
				<h2><a href="projects/{project.slug.current}">{project.title}</a></h2>
				{#if project.services_rendered}
					{#each project.services_rendered as serviceRef}
					<a class="service-link" href="/services/{serviceRef.slug.current}">{serviceRef.title}</a>
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
	.project {
		margin-bottom: 30px;
		padding-bottom: 30px;
		border-bottom: 2px solid var(--light-blue);
		display: flex;
		gap: 40px;
		color: var(--dark-brown);

	}
	.project h2 {
		font-family: var(--font-family-serif);
		color: var(--dark-brown);
		font-size: 1.6rem;
		margin-bottom: 20px;
		font-style: italic;
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
		.project {
			flex-direction: column;
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