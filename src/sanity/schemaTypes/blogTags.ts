import { defineField, defineType } from 'sanity';

export const blogTagsType = defineType({
  title: 'Post Tags',
  name: 'blogTags',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Name',
      description: 'Name of the tag.',
      validation: (Rule) => Rule.required().min(3).max(50),
    }),
  ],
});
