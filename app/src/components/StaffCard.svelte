<script lang="ts">
	import { urlFor } from '$lib/utils/image';

	export let staffer:any
</script>

<div class="card">
	<div class="card-top">
		<div>
			<h2>{staffer.name}</h2>
			<p>{staffer.role}</p>
		</div>

		<img
			class=""
			src={urlFor(staffer.headshot).url()}
			alt="Headshot of {staffer.name}"
		/>
	</div>
	<a href="mailto:{staffer.email}">{staffer.email}</a>
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
	img {
		width: 100px;
		border-radius: 6px;
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