import { createClient } from "next-sanity";

export const getClient = () => createClient({
  apiVersion: '2021-10-21',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true
});