<script lang="ts">
	import { telHref } from '$lib/utils';
	import IntroGallery from '../../components/IntroGallery.svelte';

	export let data;
</script>

<section>
	<div class="header">
		<h1>About Us</h1>

		<div>
			{#if data.contact.telephone}
				<p class="contact">Tel: <a href={telHref(data.contact.telephone)}>{data.contact.telephone}</a></p>
			{/if}
			{#if data.contact.email}
				<p class="contact"><a href="mailto:{data.contact.email}">{data.contact.email}</a></p>
			{/if}
			{#if data.contact.address}
				<p class="contact">{data.contact.address}</p>
			{/if}
		</div>
	</div>

	<IntroGallery description={data.settings.homepage_desc} --intro-gallery-padding-top="40px" />
</section>

<style>
	h1 {
		font-style: italic;
		font-size: 3rem;
		color: var(--dark-brown);
	}
	.contact {
		font-style: italic;
		color: var(--dark-brown);
	}
	.header {
		padding: 180px 60px 20px;
		display: flex;
		justify-content: space-between;
	}

	@media (max-width: 800px) {
		.header {
			padding: 120px 20px 20px;
			flex-direction: column;
			gap: 40px;
		}
	}
</style>
