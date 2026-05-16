import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://optiflowic.github.io',
  base: '/kumolo-docs',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'kumolo',
      favicon: '/favicon.png',
      logo: {
        src: './src/assets/logo.png',
        alt: 'kumolo',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/optiflowic/kumolo-docs',
        },
      ],
      sidebar: [
        { label: 'Getting Started', slug: 'getting-started' },
        {
          label: 'Services',
          items: [
            { label: 'S3', slug: 'services/s3' },
            { label: 'DynamoDB', slug: 'services/dynamodb' },
            { label: 'STS', slug: 'services/sts' },
          ],
        },
        { label: 'Contributing', slug: 'contributing' },
      ],
    }),
  ],
});
