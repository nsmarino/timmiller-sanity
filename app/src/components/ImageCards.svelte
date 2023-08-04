<script lang="ts">
	import { urlFor } from '$lib/utils/image';

	export let cards:any
    console.log("Cards", cards)
</script>

<section class="services-list">
    {#each cards as card}
        <a href="services/{card.slug.current}">
            <img
                class=""
                src={urlFor(card.image).url()}
                alt="Cover image for {card.title}"
            />
            <h3>{card.title}</h3>
        </a>
    {/each}
</section>

<style>
    section.services-list {
    background-color: var(--light-brown);
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 60px;
}

section.services-list a {
    background-color: var(--light-brown);
    flex-grow: 1;
    flex-basis: 0px;
    display: block;
    padding: 10px;
    text-decoration: none;
}
section.services-list a:hover h3 {
    text-decoration: underline;
}
section.services-list a img{
    width: 100%;
    border-radius: 6px;
}
section.services-list h3 {
    font-family: var(--font-family-sans);
    color: var(--dark-brown);
    text-decoration: none;
    text-align: center;
    font-weight: normal;
}
</style>
