<script lang="ts">
	import RichText from '../../../components/RichText.svelte';
	import { formatDate } from '$lib/utils';
	import { imageUrl } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="post">
	{#if imageUrl(data.mainImage)}
		<img
			class="post__cover"
			src={imageUrl(data.mainImage)}
			alt="Cover image for {data.title}"
		/>
	{:else}
		<div class="post__cover--none" />
	{/if}
	<div class="post__container">
		<h1 class="post__title">{data.title}</h1>
		<p class="post__excerpt">{data.excerpt}</p>
		<p class="post__date">
			{formatDate(data._createdAt)}
		</p>
		<div class="post__content">
			<RichText value={data.body} />
		</div>
	</div>
</section>
