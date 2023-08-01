import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const client = createClient({
	projectId: "lxclhqpq",
	dataset: "production",
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPost(slug: string): Promise<Post> {
	return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
		slug
	});
}

export async function getSettings(slug: string) {
	return await client.fetch(groq`*[_type == "settings"][0]`);
}

export async function getServices() {
	return await client.fetch(
		groq`*[_type == "service" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getService(slug: string) {
	return await client.fetch(groq`*[_type == "service" && slug.current == $slug][0]`, {
		slug
	});
}

export async function getProjects() {
	return await client.fetch(
		groq`*[_type == "project"] | order(_createdAt desc) {
			...,
			public_documents[]{
				label,
				"url": file.asset->url
			}
		}`
	);
}

export async function getStaff() {
	return await client.fetch(
		groq`*[_type == "staff"] | order(_createdAt desc)`
	);
}

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}
