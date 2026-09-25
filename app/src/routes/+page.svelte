<script lang="ts">
	import IntroGallery from '../components/IntroGallery.svelte';
    import { imageUrl } from '$lib/utils/image';
    import ImageCards from '../components/ImageCards.svelte';

	export let data;

	// Sanity drops an array field entirely when its last item is removed, so `names` can be null.
	// Also skip half-filled buttons missing a label or URL.
	$: ctas = (data.settings?.names ?? []).filter(
		(cta: { label?: string; url?: string }) => cta?.label?.trim() && cta?.url?.trim()
	);
    console.log(data.settings)
    console.log(data.services)
</script>

<section class="hero">

{#if imageUrl(data.settings?.mainImage)}
<img
    src={imageUrl(data.settings.mainImage)}
    alt="Cover image for {data.settings.title}"
/>
{/if}
{#if ctas.length}
<div class="ctas">
    {#each ctas as cta}
        <a href="{cta.url}">{cta.label}</a>
    {/each}
</div>
{/if}
</section>
<IntroGallery description={data.settings.homepage_desc} />

<ImageCards cards={data.services} />

<style>

section.hero {
    position: relative;
    height: 40vw;
}
.hero img {
	width: 100%;
	height: 100%;
    object-fit: cover;
}

.hero .ctas {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    padding: 60px;
    gap: 20px;
}

.hero .ctas a {
    display: block;
    background-color: var(--dark-brown);
    flex-grow: 1;
    max-width: 200px;
    border: 1px solid var(--off-white);
    color: var(--off-white);
    font-style: italic;
    text-decoration: none;
    padding: 20px;
    text-align: center;
    transition: background-color ease-in-out 0.2s;

}
.hero .ctas a:hover {
    background-color: var(--mid-brown);
    transition: background-color ease-in-out 0.2s;
}

@media (max-width: 800px) {
    section.hero {
    position: relative;
    height: 120vw;
}
.hero .ctas {
    padding: 10px;
}
}

</style>