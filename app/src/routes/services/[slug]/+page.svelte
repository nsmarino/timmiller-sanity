<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import StaffCard from '../../../components/StaffCard.svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	export let data;
    console.log(data)
</script>

<section>
	<div class="info">
		<h1>{data.title}</h1>
		<div class="info-body">
			<PortableText value={data.service_desc}/>
		</div>
	</div>
	<div class="right-col">
		<img
			class="service-img"
			src={urlFor(data.image).url()}
			alt="Cover image for {data.title}"
		/>
		<StaffCard staffer={data.contact} />
		<svg viewBox="0 0 741 1478" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M741 1478C544.475 1478 355.998 1400.14 217.034 1261.55C78.0695 1122.96 4.13883e-05 934.995 0 739C-4.13883e-05 543.005 78.0693 355.038 217.034 216.448C355.998 77.8589 544.474 9.11205e-05 741 0L741 739L741 1478Z" fill="#F6F9FB"/>
		</svg>
			
	</div>
</section>

<style>
	section {
		background-color: var(--off-white);
		display: flex;
		gap: 30px;
		padding-top: 120px;

	}
	.service-img {
		border-radius: 18px 0 0 18px;
		width: 100%;
		z-index: 1;
		position: relative;
	}
	.info {
		padding: 60px;
	}
	.info h1 {
		font-size: 3rem;
		font-style: italic;
		font-weight: normal;
		color: var(--dark-brown);
		margin-bottom: 40px;
	}
	.info-body {
		font-family: var(--font-family-sans);
		color: var(--dark-brown);
		font-weight: normal;
		line-height: 1.3rem;
	}

	.right-col {
		flex-basis: 40%;
		flex-shrink: 0;
		overflow: hidden;
		position: relative;
	}
	svg {
		position: absolute;
		top: 33%;
	}
	@media (max-width: 800px) {
		section {
			flex-direction: column;

		}
		.info {
			padding: 20px;
		}
		.service-img {
		border-radius: 0;
	}

	}
	
</style>