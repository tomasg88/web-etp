import { defineField, defineType } from 'sanity';
import { DESCRIPTION_MESSAGES, ERROR_MESSAGES } from '../messages';

// Each one of these documents type shouls reflect a section
export const sections = defineType({
  description: DESCRIPTION_MESSAGES.sections.document,
  name: 'section',
  title: 'Secciones',
  type: 'document',
  fields: [
    // This field should allow to select a layout design from a list with the available designs
    defineField({
      description: DESCRIPTION_MESSAGES.sections.layout,
      name: 'layout',
      title: 'Diseño de sección',
      type: 'reference',
      to: [{ type: 'layout' }],
      validation: (Rule) =>
        Rule.required().error(ERROR_MESSAGES.sections.layoutRequired),
    }),
    // Todos los layouts van a tener una frase principal
    defineField({
      description: DESCRIPTION_MESSAGES.sections.firstSentence,
      hidden: ({ document }) => !document?.layout,
      name: 'firstSentence',
      title: 'Frase principal',
      type: 'reference',
      to: [{ type: 'texts' }],
      validation: (Rule) =>
        Rule.required().error(ERROR_MESSAGES.sections.textRequired),
    }),
    defineField({
      description: DESCRIPTION_MESSAGES.sections.secondSentence,
      hidden: ({ document }) => !document?.layout,
      name: 'secondSentence',
      title: 'Frase secundaria',
      type: 'reference',
      to: [{ type: 'texts' }],
    }),
    defineField({
      description: DESCRIPTION_MESSAGES.sections.image,
      hidden: ({ document }) => !document?.layout,
      name: 'image',
      title: 'Imagen',
      type: 'image',
    }),
  ],
});
