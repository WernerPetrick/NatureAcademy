import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'internalLink',
      title: 'Internal Link',
      description: "Select pages for navigation",
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'article'}
      ]
      
    }),
    defineField({
      name: 'externalUrl',
      type: 'url',
      description: "Use full URLs for external link",
      title: 'External URL'
    }),
  ]
})
