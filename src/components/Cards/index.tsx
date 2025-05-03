import { BlogPosts } from '../../../sanity.types';

export const BlogPostListingCard: React.FC<BlogPosts> = ({ title, publishedAt }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{publishedAt}</p>
    </div>
  );
};
