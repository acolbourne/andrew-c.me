import { groq } from 'next-sanity';
import { client } from '../lib/client';

export async function allPostsQuery() {
  const query = groq`*[_type == "blogPosts"]{
		_id,
		title,
		slug,
		author -> {
			name,
			image
		},
		body,
		mainImage,
		publishedAt,
		category[] -> {
			title
		}
	}`;
  const posts = await client.fetch(query);
  return posts;
}
