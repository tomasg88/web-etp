import { defineField, defineType } from 'sanity';

export const freeResources = defineType({
  name: 'free-resources',
  title: 'Descargables',
  type: 'document',
  fields: [
    defineField({
      description: 'Nombre con el que aparecerá el recurso listado en el sitio',
      name: 'name',
      title: 'Nombre del Recurso',
      type: 'string',
    }),
    defineField({
      description: 'Una breve descripción del contenido del archivo',
      name: 'description',
      title: 'Descripción',
      type: 'string',
    }),
    defineField({
      description:
        'Este campo va a ser usado para decirle a MailChimp cuál es el mail que le debe enviar al usuario',
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      description: 'Con esto podemos hacer que el recurso NO APAREZCA',
      initialValue: false,
      name: 'active',
      title: 'Visible',
      type: 'boolean',
    }),
  ],
});
