<script lang="ts">
	import { imageUrl } from '$lib/utils/image';

	export let staffer:any

	$: headshot = imageUrl(staffer?.headshot, (b) => b.width(200).height(200).fit('crop'));
	$: initials = (staffer?.name ?? '')
		.split(/[\s,]+/)
		.filter((part: string) => /^[A-Za-z]/.test(part) && part !== part.toUpperCase())
		.map((part: string) => part[0])
		.slice(0, 2)
		.join('');
</script>

<div class="card">
	<div class="card-top">
		<div>
			<h2>{staffer.name}</h2>
			<p>{staffer.role}</p>
		</div>

		{#if headshot}
			<img src={headshot} alt="Headshot of {staffer.name}" />
		{:else}
			<div class="headshot-placeholder" aria-hidden="true">{initials}</div>
		{/if}
	</div>
	{#if staffer.email?.trim()}
		<a href="mailto:{staffer.email.trim()}">{staffer.email.trim()}</a>
	{/if}
</div>
<style>
	.card {
		z-index: 1;
		position: relative;
		text-align: right;
		margin: 20px;
		flex-grow: 0;
		flex-basis: calc((100% / 3) - 40px);
	}
	.card-top {
		display: flex;
		justify-content: flex-end;
		gap: 20px;
		margin-bottom: 20px;
	}
	h2 {
		font-style: italic;
		color: var(--dark-brown);
		font-weight: normal;
	}
	img,
	.headshot-placeholder {
		width: 100px;
		flex-shrink: 0;
		border-radius: 6px;
	}
	.headshot-placeholder {
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--light-brown);
		color: var(--dark-brown);
		font-style: italic;
		font-size: 1.5rem;
	}
	p {
		font-family: var(--font-family-sans);
		font-size: 0.8rem;
	}
	a {
		font-family: var(--font-family-sans);
		text-align: right;
		font-size: 0.8rem;

	}
</style>