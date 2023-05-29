import { defineField, defineType } from 'sanity';
import { DESCRIPTION_MESSAGES, ERROR_MESSAGES } from 'lib/messages';

export const pages = defineType({
  description: DESCRIPTION_MESSAGES.pages.document,
  name: 'pages',
  title: 'Páginas',
  type: 'document',
  fields: [
    defineField({
      description: DESCRIPTION_MESSAGES.pages.name,
      name: 'name',
      title: 'Nombre de la página',
      type: 'string',
      validation: (Rule) =>
        Rule.max(120).warning(ERROR_MESSAGES.pages.nameTooLong),
    }),
    defineField({
      description: DESCRIPTION_MESSAGES.pages.slug,
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) =>
        Rule.required().error(ERROR_MESSAGES.pages.slugRequired),
    }),
    defineField({
      description: DESCRIPTION_MESSAGES.pages.body,
      name: 'body',
      title: 'Diseño',
      type: 'array',
      of: [{ type: 'section' }],
      validation: (Rule) =>
        Rule.min(1).error(ERROR_MESSAGES.pages.atLeastOneSection),
    }),
    defineField({
      description: DESCRIPTION_MESSAGES.pages.isActive,
      initialValue: false,
      name: 'isActive',
      title: 'Página activa?',
      type: 'boolean',
    }),
  ],
});
