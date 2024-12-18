import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import remarkCustomHeadingId from 'remark-custom-heading-id'
import starlightLinksValidator from 'starlight-links-validator'

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCustomHeadingId],
  },
  integrations: [
    starlight({
      pagefind: false,
      plugins: [starlightLinksValidator()],
      title: 'Starlight Links Validator Tests - custom ids',
    }),
  ],
})
