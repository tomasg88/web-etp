import { deskTool } from 'sanity/desk';
import { Config } from 'sanity';
import { freeResources } from './schemas/free-resources';
import { pages } from './schemas/pages';
import { sections } from './schemas/sections';
import { layout } from './schemas/custom-fields/layout';
import { texts } from './schemas/texts';
import { blockContent } from './schemas/custom-fields/block';

export const config = {
  apiVersion: '2021-10-21',
  basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  plugins: [deskTool()],
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  schema: {
    types: [
      // FIELDS
      blockContent,
      layout,
      // DOCUMENTS
      pages,
      sections,
      texts,
      freeResources,
    ],
  },
  title: 'Admin - Enciende tu Poder',
} as Config;

export const clientConfig = {
  apiVersion: '2021-10-21',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
};
