import { getServices } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const services = await getServices();

	if (services) {
		return {
			services
		};
	}

	return error(404, 'Not found');
}) satisfies PageLoad;