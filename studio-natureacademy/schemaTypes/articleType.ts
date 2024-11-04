import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      title: "Type of article",
      description: "Category of Article",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Nature", value: "nature" },
          { title: "Space", value: "space" },
          { title: "Humanity", value: "humanity" },
        ]
      }
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Video URL',
      name: 'imageUrl',
      type: 'url'
    }),
    defineField({
      title: 'Reference URL',
      name: 'referenceURL',
      type: 'url'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tagType' }] }],
      description: 'Select tags for this article',
    }),
  ],
})
