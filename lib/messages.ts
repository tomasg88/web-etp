export const ERROR_MESSAGES = {
  pages: {
    atLeastOneSection: 'Cada página debe contener al menos una sección',
    nameTooLong: 'El nombre de la página excede el máximo de caracteres sugerido',
    slugRequired: 'Slug es obligatorio. Pulse en el botón generate para generar uno automáticamente',
  },
  sections: {
    layoutRequired: 'Debe seleccionar un Diseño de sección',
    textRequired: 'Al menos un texto es requerido para todos los diseños.'
  },
  texts: {
    required: 'El texto es obligatorio',
    maxLength: 'El texto supera la longitud sugerida. Revisá la página al publicar.',
  }
}

export const DESCRIPTION_MESSAGES = {
  pages: {
    document: 'Cada uno de estos documentos representa una página dentro del sitio enciendetupoder.com',
    name: 'El nombre de la página. Ej: Sesión de Reiki a Distancia',
    slug: 'El slug sirve para definir la URL de la página',
    body: 'Cada página está compuesta por una sucesión de secciones. Se puede cambiar el orden y armar a gusto.',
    isActive: 'Permita activar o desactivar la página',
  },
  sections: {
    document: 'Cada documento es una sección. Cada una está definida por un diseño, el o los textos que requiera, y opcionalmente una imágen. ',
    layout: 'Seleccione el diseño de la sección. Depende del diseño seleccionado, deberás elegir una o más frases',
    firstSentence: 'Frase principal del diseño de sección seleccionado',
    secondSentence: 'Frase secundaria. Esta es opcional. Dependerá del tipo de layout seleccionado',
    image: 'Algunos diseños cargados requieren de una imagen para que queden bien',
  },
  texts: {
    document: 'Todo el contenido que necesite aparecer en la página deberá ser creado aquí como primer paso.',
    sentence: 'Texto "suelto" que deseamos que esté presente en algún lado del sitio.'
  }
}