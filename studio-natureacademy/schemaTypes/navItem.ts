import {defineField, defineType} from 'sanity'

export const navItem = defineType({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Navigation Text'
    }),
    defineField({
      name: 'navigationItemUrl',
      type: 'url',
      title: 'Navigation Item URL'
    }),
  ]
})
