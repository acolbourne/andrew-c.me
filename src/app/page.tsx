'use client';

import { BlogPostListingCard } from '@/components/Cards';
import { allPostsQuery } from '@/sanity/queries';
import { useQuery } from '@tanstack/react-query';
import { BlogPosts } from '../../sanity.types';

export default function Homepage() {
  const { data, isLoading, isError } = useQuery<BlogPosts[]>({
    queryKey: ['allPosts'],
    queryFn: allPostsQuery,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading posts</div>;

  console.log('data', data);

  return (
    <div>
      <h1>Blog Posts</h1>
      {data.map((post) => (
        <BlogPostListingCard key={post._id} {...post} />
      ))}
    </div>
  );
}
