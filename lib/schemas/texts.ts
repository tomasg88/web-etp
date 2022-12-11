import { defineField, defineType } from "sanity";
import { DESCRIPTION_MESSAGES, ERROR_MESSAGES } from "../messages";

export const texts = defineType({
  description: DESCRIPTION_MESSAGES.texts.document,
  name: 'texts',
  title: 'Textos',
  type: 'document',
  fields: [
    defineField({
      description: DESCRIPTION_MESSAGES.texts.sentence,
      name: 'sentence',
      title: 'Oración / Frase',
      type: 'string',
      validation: Rule => Rule.required().error(ERROR_MESSAGES.texts.required).max(240).warning(ERROR_MESSAGES.texts.maxLength)
    })
  ]
})