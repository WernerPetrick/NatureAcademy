import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
    }),
    defineField({
      name: 'isHeadineOne',
      title: 'Is it a <h1>?',
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
