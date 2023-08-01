<script lang="ts">
	export let data;
    console.log(data.projects)
</script>

<section>

	<h1>Public Review</h1>
    <div>
	{#if data.projects.length}
		{#each data.projects as project}
			<h2>{project.title}</h2>
			{#each project.public_documents as doc}
				<div><a href="{doc.url}">{doc.label}</a></div>
			{/each}
		{/each}
	{/if}
    </div>
</section>