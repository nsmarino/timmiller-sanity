<script>
	import { fly } from 'svelte/transition'
	import { cubicIn, cubicOut } from 'svelte/easing'

	export let data
  </script>

<div class="container">
	<header class="header">
		<a class="header__title" href="/">Tim Miller Associates, Inc.</a>
		<a href="/services">Services</a>
		<a href="/public-review">Public Review</a>
		<a href="/contact">Contact</a>
	</header>
	{#key data.pathname}
		<main
			in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
			out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
		>
			<slot />
		</main>
	{/key}
	<footer class="footer">
		<p>Tel: (845) 265-4400</p>
		<p>Fax: (845) 265-4400</p>
		<p>contact@timmillerassociates.com</p>
		<p>10 North St, Cold Spring NY, 10516</p>
	</footer>
</div>
