<script lang="ts">
	import { page } from '$app/stores';

	$: notFound = $page.status === 404;
</script>

<svelte:head>
	<title>{notFound ? 'Page Not Found' : 'Something Went Wrong'} | Tim Miller Associates</title>
</svelte:head>

<section>
	<div class="header">
		<p class="status">{$page.status}</p>
		<h1>{notFound ? 'Page not found' : 'Something went wrong'}</h1>
		<p class="message">
			{#if notFound}
				The page you're looking for may have moved or no longer exists.
			{:else}
				We ran into a problem loading this page. Please try again in a moment.
			{/if}
		</p>
	</div>

	<div class="links">
		<a href="/">Home</a>
		<a href="/services">Services</a>
		<a href="/public-review">Public Review</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
	</div>
</section>

<style>
	.header {
		padding: 180px 60px 20px;
		max-width: 600px;
	}
	.status {
		font-family: var(--font-family-sans);
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		color: var(--mid-brown);
	}
	h1 {
		font-style: italic;
		font-size: 3rem;
		color: var(--dark-brown);
		margin: 10px 0 20px;
	}
	.message {
		font-family: var(--font-family-sans);
		color: var(--dark-brown);
	}
	.links {
		margin-top: 40px;
		background: var(--light-blue);
		display: flex;
		flex-wrap: wrap;
		gap: 20px 40px;
		padding: 60px;
	}
	.links a {
		font-style: italic;
		font-size: 1.25rem;
		color: var(--dark-brown);
	}
	@media (max-width: 800px) {
		.header {
			padding: 120px 20px 20px;
		}
		.links {
			padding: 20px;
			flex-direction: column;
		}
	}
</style>
