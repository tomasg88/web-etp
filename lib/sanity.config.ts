import { deskTool } from 'sanity/desk';
import { freeResources } from './schemas/free-resources';
import {Config} from 'sanity'
import { createClient } from 'next-sanity';

export const config = {
  apiVersion: '2021-10-21',
  basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  plugins: [deskTool()],
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  schema: {
    types: [freeResources],
  },
  title: 'Admin - Enciende tu Poder',
} as Config;

export const clientConfig = {
  apiVersion: '2021-10-21',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true
}