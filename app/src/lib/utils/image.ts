import imageUrlBuilder from '@sanity/image-url';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './sanity';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

// True when a Sanity image field actually points at an asset. Removing an image in
// the Studio can leave `null` or a bare `{_type: 'image'}` with no asset behind.
export function hasImage(source: unknown): source is SanityImageSource {
	if (!source) return false;
	if (typeof source === 'string') return source.length > 0;
	const asset = (source as { asset?: { _ref?: string; _id?: string; url?: string } }).asset;
	return Boolean(asset?._ref || asset?._id || asset?.url);
}

// Safe URL builder for templates: returns undefined instead of throwing when the
// image is missing or malformed, so one bad document can't take down a page.
export function imageUrl(
	source: unknown,
	transform: (b: ImageUrlBuilder) => ImageUrlBuilder = (b) => b
): string | undefined {
	if (!hasImage(source)) return undefined;
	try {
		return transform(urlFor(source)).url();
	} catch (err) {
		console.warn('Unable to build image url for source', source, err);
		return undefined;
	}
}
