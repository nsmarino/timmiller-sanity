import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getService} from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
    console.log(params)
	const post = await getService(params.slug);
	if (post) return post;

	throw error(404, 'Not found');
}) satisfies PageLoad;