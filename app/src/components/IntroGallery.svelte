<script lang="ts">
	import type { InputValue } from '@portabletext/svelte';
	import RichText from './RichText.svelte';

	// Company description beside a stack of featured project photos (Home + About)
	export let description: InputValue | null | undefined;

	const images = [
		{
			src: '/images/about/lewisboro-commons.jpg',
			alt: 'Lewisboro Commons affordable housing, Lewisboro, Westchester County: Environmental Impact Statement, wetlands permitting and wetlands restoration',
			width: 1200,
			height: 900
		},
		{
			src: '/images/about/hollowbrook-golf-club.jpg',
			alt: 'Hollowbrook Golf Club, Town of Cortlandt, Westchester County: Environmental Impact Statement, wetlands permitting and wetlands construction',
			width: 1200,
			height: 800
		},
		{
			src: '/images/about/butterfield-mixed-use.jpg',
			alt: 'Butterfield mixed-use project, Cold Spring, Putnam County: multi-family residential, retail and office; zoning amendment and Environmental Impact Statement',
			width: 1200,
			height: 800
		}
	];
</script>

<div class="intro-gallery">
	<div class="intro">
		<div class="description">
			<RichText value={description} />
		</div>
		<a class="cta" href="/contact">Get In Touch</a>
	</div>

	<div class="gallery">
		{#each images as image}
			<img
				src={image.src}
				alt={image.alt}
				width={image.width}
				height={image.height}
				loading="lazy"
			/>
		{/each}
	</div>
</div>

<style>
	/* Pages can adjust the top spacing with <IntroGallery --intro-gallery-padding-top="..." /> */
	.intro-gallery {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 60px;
		align-items: start;
		padding: var(--intro-gallery-padding-top, 60px) 60px 60px;
	}
	/* The text is much shorter than the image stack, so keep it in view while scrolling */
	.intro {
		position: sticky;
		top: 120px;
		max-width: 520px;
	}
	.description {
		color: var(--dark-brown);
		font-size: 1.4rem;
	}
	.cta {
		display: inline-block;
		margin-top: 40px;
		min-width: 200px;
		padding: 20px;
		background-color: var(--dark-brown);
		border: 1px solid var(--off-white);
		color: var(--off-white);
		font-style: italic;
		text-align: center;
		text-decoration: none;
		transition: background-color ease-in-out 0.2s;
	}
	.cta:hover {
		background-color: var(--mid-brown);
	}
	.cta:focus-visible {
		outline: 2px solid var(--green);
		outline-offset: 3px;
	}
	.gallery {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	/* Shown uncropped: the captions are part of the photos */
	.gallery img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 6px;
	}

	@media (max-width: 800px) {
		.intro-gallery {
			grid-template-columns: 1fr;
			gap: 40px;
			padding: 20px 20px 40px;
		}
		.intro {
			position: static;
			max-width: none;
		}
		.description {
			font-size: 1.2rem;
		}
		.cta {
			display: block;
		}
		.gallery {
			gap: 20px;
		}
	}
</style>
