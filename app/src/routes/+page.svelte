<script lang="ts">
    import { urlFor } from '$lib/utils/image';
    import { PortableText } from '@portabletext/svelte';
    import ImageCards from '../components/ImageCards.svelte';

	export let data;
    console.log(data.settings)
    console.log(data.services)
</script>

<section class="hero">

<img
    class=""
    src={urlFor(data.settings.mainImage).url()}
    alt="Cover image for {data.settings.title}"
/>
<div class="ctas">
    {#each data.settings.names as cta}
        <a href="{cta.url}">{cta.label}</a>
    {/each}
</div>
</section>
<section class="richtext">
    <PortableText value={data.settings.homepage_desc} />
</section>

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

section.richtext {
    margin: 60px auto;
    padding: 0px 40px;
    text-align: center;
    color: var(--dark-brown);
    font-size: 1.4rem;
    max-width: 600px;
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