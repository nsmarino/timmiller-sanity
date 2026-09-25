import { getContactInfo, type ContactInfo } from '$lib/utils/sanity';
import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
	const { pathname } = url;

	// Office contact details used site-wide (footer, About, Contact). A failed fetch
	// shouldn't take down every page, so fall back to hiding them.
	let contact: ContactInfo = { email: null, telephone: null, address: null };
	try {
		contact = await getContactInfo();
	} catch (err) {
		console.error('Unable to load contact info from Sanity', err);
	}

	return {
		pathname,
		contact
	};
}) satisfies LayoutLoad;
