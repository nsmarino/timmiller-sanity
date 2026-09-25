<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';

	export let portableText: BlockComponentProps;

	$: ({ value } = portableText);
	$: style = value.style || 'normal';
	$: text = (value.children ?? [])
		.map((child) => ('text' in child && typeof child.text === 'string' ? child.text : ''))
		.join('');
	// Editors type bullets by hand ("· Item") instead of using the list tool, and
	// press enter twice for a blank line — keep both from collapsing.
	$: isBullet = /^\s*[·•▪◦‣-]\s/.test(text);
	$: isEmpty = text.trim() === '';
</script>

{#if ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'].includes(style)}
	<svelte:element this={style}><slot /></svelte:element>
{:else if style === 'normal'}
	<p class:bullet={isBullet} class:empty={isEmpty}><slot /></p>
{:else}
	<slot />
{/if}
