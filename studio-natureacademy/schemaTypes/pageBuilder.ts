import {defineField, defineType} from 'sanity';

export const pageBuilder = defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      description: 'Description about the page',
      type: 'string',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      description: 'Page Header',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content Blocks',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'textArea' },
        { type: 'image', },
        { type: 'textBlock', },
      ],
    }),
  ],
});
