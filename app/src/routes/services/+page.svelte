<script lang="ts">
	import { urlFor } from '$lib/utils/image';

	export let data;
    console.log(data.services)
</script>

<section>

	<h1>Services</h1>
    <div>
	{#if data.services.length}
		{#each data.services as service}
			<a href="services/{service.slug.current}">
				<img
					class="post__cover"
					src={urlFor(service.image).url()}
					alt="Cover image for {service.title}"
				/>
				<h2>{service.title}</h2>
			</a>
		{/each}
	{/if}
    </div>
</section>