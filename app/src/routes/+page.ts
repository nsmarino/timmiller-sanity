import { getPosts, getServices, getSettings } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const settings = await getSettings()
	const services = await getServices()

	if (settings) {
		return {
			settings,
			services
		};
	}

	return error(404, 'Not found');
}) satisfies PageLoad;
