import { defineField, defineType } from "sanity";

// In this field type we should just have the list of different UI designs.
export const layout = defineType({
  name: 'layout',
  title: 'Diseño de sección',
  type: 'object',
  fields: [
    defineField({
      name: 'design',
      title: 'Título',
      type: 'string',
    })
  ]
})