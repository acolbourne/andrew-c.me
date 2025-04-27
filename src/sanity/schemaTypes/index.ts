import { type SchemaTypeDefinition } from 'sanity';
import { blogAuthorsType } from './blogAuthors';
import { blogCategoriesType } from './blogCategories';
import { blogPostsType } from './blogPosts';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPostsType, blogAuthorsType, blogCategoriesType],
};
