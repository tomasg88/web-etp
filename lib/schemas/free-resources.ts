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
      description: 'Permite mostrar u ocultar el recurso en la página. Si está desactivado, el mismo no se mostrará',
      initialValue: false,
      name: 'active',
      title: 'Visible',
      type: 'boolean',
    }),
    defineField({
      description: 'La imagen que se usará para mostrar en el sitio',
      name: 'cover',
      title: 'Portada',
      type: 'image',
    }),
    defineField({
      description: 'Texto que aparecerá en el botón de descarga del recurso',
      name: 'ctaButton',
      title: 'Botón (CTA)',
      type: 'string',
    }),
  ],
});
