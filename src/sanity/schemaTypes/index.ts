import { type SchemaTypeDefinition } from 'sanity';
import { blogAuthorsType } from './blogAuthors';
import { blogCategoriesType } from './blogCategories';
import { blogPostsType } from './blogPosts';
import { blogTagsType } from './blogTags';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPostsType, blogAuthorsType, blogCategoriesType, blogTagsType],
};
