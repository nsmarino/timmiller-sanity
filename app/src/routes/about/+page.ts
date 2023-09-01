import { getStaff, getSettings } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const staff = await getStaff();
	const settings = await getSettings()


	if (staff && settings) {
		return {
			staff,
			settings
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;