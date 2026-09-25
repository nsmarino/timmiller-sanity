import { getSettings } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const settings = await getSettings();

	if (settings) {
		return {
			settings
		};
	}

	return error(404, 'Not found');
}) satisfies PageLoad;
