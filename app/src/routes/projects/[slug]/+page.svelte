<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import StaffCard from '../../../components/StaffCard.svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	export let data;
    console.log(data)
</script>

<section>
	<h1>{data.title}</h1>
	{#each data.services_rendered as serviceRef}
	<a class="service-link" href="/services/{serviceRef.slug.current}">{serviceRef.title}</a>
	{/each}

	<div class="doc-list">
		<h2>Public Documents</h2>
		{#each data	.public_documents as doc}
			{#if doc.url} 
				<a class="doc-link" href="{doc.url}" target="_blank">{doc.label}</a>
			{:else}
				<h3>{doc.label}</h3>
			{/if}
		{/each}		
	</div>

</section>

<style>
	section {
		background-color: var(--off-white);
		gap: 30px;
		padding: 180px 60px 20px;
	}

	h1 {
		font-size: 3rem;
		font-style: italic;
		font-weight: normal;
		color: var(--dark-brown);
		margin-bottom: 20px;
	}
	.doc-list {
		margin-top: 40px;
	}
	.doc-list h2 {
		font-size: 1.8rem;
		font-style: italic;
		font-weight: normal;
		color: var(--dark-brown);
		margin-bottom: 20px;
	}
	.doc-link {
		font-family: var(--font-family-sans);
		font-weight: normal;
		display: block;
		margin: 10px 0;
	}
	h3 {
		font-family: var(--font-family-sans);
		font-weight: bold;
		font-size: 1rem;
		margin: 40px 0 20px;
	}
	.service-link {
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
		section {
			padding: 120px 20px 20px;
		}

		.service-link {
			font-size: 0.8rem;
			display: block;
			max-width: fit-content;
			margin-bottom: 20px;
		}
	}
</style>