import { groq } from 'next-sanity';

export const allPostsQuery = groq`[_type == 'blogPosts']{
	_id,
	title,
	slug,
	publishedAt,
	"author": author->name,
	"mainImage": mainImage.asset->url
}`;
