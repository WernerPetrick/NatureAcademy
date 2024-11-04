import {defineField, defineType} from 'sanity';

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}]
    }),
  ]
});
