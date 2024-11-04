// /schemas/tag.ts
import { defineField, defineType } from 'sanity';

export const tagType = defineType({
  name: 'tagType',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tag',
      type: 'string',
      description: 'Name of the tag',
    }),
  ],
});
