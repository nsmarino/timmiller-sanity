<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte';
	import RichTextBlock from './RichTextBlock.svelte';

	export let value: InputValue | null | undefined;

	function isEmptyBlock(block: unknown) {
		const b = block as { _type?: string; children?: { text?: string }[] };
		return (
			b?._type === 'block' &&
			!(b.children ?? []).some((child) => (child.text ?? '').trim() !== '')
		);
	}

	// Blank lines between paragraphs are intentional, but leading/trailing ones are
	// stray Enter presses in the editor and just add dead space around the text.
	$: blocks = (() => {
		if (!value) return [];
		const list = Array.isArray(value) ? [...value] : [value];
		while (list.length && isEmptyBlock(list[0])) list.shift();
		while (list.length && isEmptyBlock(list[list.length - 1])) list.pop();
		return list;
	})();
</script>

{#if blocks.length}
	<div class="rich-text">
		<PortableText value={blocks} components={{ block: { normal: RichTextBlock } }} />
	</div>
{/if}

<style>
	/* global.css zeroes paragraph margins, so each Sanity block needs its own spacing */
	.rich-text > :global(* + *) {
		margin-top: 1em;
	}
	.rich-text > :global(:first-child) {
		margin-top: 0;
	}
	/* Headings echo the page title: serif italic, set apart from the preceding section */
	.rich-text :global(h2) {
		font-family: var(--font-family-serif), serif;
		font-size: 1.6rem;
		font-style: italic;
		font-weight: normal;
		line-height: 1.2;
		color: var(--dark-brown);
	}
	.rich-text > :global(* + h2) {
		margin-top: 1.5em;
	}
	.rich-text > :global(h2 + *) {
		margin-top: 0.5em;
	}
	/* Consecutive hand-typed bullets read as a list, not separate paragraphs */
	.rich-text > :global(p.bullet + p.bullet) {
		margin-top: 0.35em;
	}
	.rich-text > :global(p.bullet) {
		padding-left: 1em;
		text-indent: -0.75em;
	}
	/* An empty paragraph is an intentional blank line */
	.rich-text > :global(p.empty) {
		min-height: 1em;
	}
	.rich-text :global(ul),
	.rich-text :global(ol) {
		margin-bottom: 0;
		padding-left: 1.25em;
	}
	.rich-text :global(li + li) {
		margin-top: 0.35em;
	}
</style>
