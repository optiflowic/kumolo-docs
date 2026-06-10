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
      customCss: ['./src/styles/custom.css'],
      logo: {
        src: './src/assets/logo.png',
        alt: 'kumolo',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/optiflowic/kumolo',
        },
      ],
      sidebar: [
        { label: 'Getting Started', slug: 'getting-started' },
        {
          label: 'Services',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'services' },
            { label: 'DynamoDB', slug: 'services/dynamodb' },
            { label: 'KMS', slug: 'services/kms' },
            { label: 'S3', slug: 'services/s3' },
            { label: 'STS', slug: 'services/sts' },
          ],
        },
        { label: 'Known Limitations', slug: 'known-limitations' },
      ],
    }),
  ],
});
