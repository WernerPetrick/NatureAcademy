import {defineField, defineType} from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'navId',
      type: 'slug',
      title: 'Navigation Id'
    }),
    defineField({
      name: "items",
      title: "Navigation items",
      type: "array",
      of: [
        { type: "navigationItem"}
      ]
    }),
  ]
})
