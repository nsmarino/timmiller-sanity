import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getProject} from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const project = await getProject(params.slug);
	if (project) return project;

	throw error(404, 'Not found');
}) satisfies PageLoad;