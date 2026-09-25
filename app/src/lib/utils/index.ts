export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

// "(845) 265-4400" -> "tel:+18452654400"; assumes US numbers when no country code is given
export function telHref(phone: string) {
	const digits = phone.replace(/\D/g, '');
	return `tel:+${digits.length === 10 ? '1' + digits : digits}`;
}
