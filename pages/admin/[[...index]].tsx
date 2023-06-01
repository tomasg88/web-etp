import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { config } from 'lib/sanity.config';

const studioConfig = defineConfig(config);

// THIS COMPONENT WILL MOUNT ON EVERY ROUTE THAT IS UNDER /admin
export default function StudioPage() {
  return <NextStudio config={studioConfig} />;
}
