import {defineField, defineType} from 'sanity';

export const textArea = defineType({
  name: 'textArea',
  title: 'Text Area',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
});
