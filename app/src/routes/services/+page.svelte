<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import ImageCards from '../../components/ImageCards.svelte';

	export let data;
    console.log(data.services)
</script>

	<h1>Services</h1>
	<ImageCards cards={data.services} />

<style>
	h1 {
		padding: 180px 60px 20px;
		font-style: italic;
		font-size: 3rem;
		color: var(--dark-brown);
	}
</style>