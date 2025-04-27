import { defineField, defineType } from 'sanity';

export const blogAuthorsType = defineType({
  title: 'Authors',
  name: 'blogAuthors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of the author.',
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
      description: 'Short biography of the author.',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Profile image of the author.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'platform',
              type: 'string',
              title: 'Platform',
              description: 'Name of the social media platform.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL',
              description: "Link to the author's profile on the platform.",
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ['http', 'https'],
                }),
            }),
          ],
        },
      ],
    }),
  ],
});
