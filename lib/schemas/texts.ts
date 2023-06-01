import { defineField, defineType } from 'sanity';
import { DESCRIPTION_MESSAGES } from 'lib/messages';

export const texts = defineType({
  description: DESCRIPTION_MESSAGES.texts.document,
  name: 'texts',
  title: 'Textos',
  type: 'document',
  fields: [
    defineField({
      name: 'sentence',
      title: 'Oración / Frase',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
