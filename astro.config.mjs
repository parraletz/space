import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: 'https://parraletz.space',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      transformers: [
        {
          pre(node) {
            // Add any available language as a data attribute
            const codeEl = node.children.find(n => n.type === 'element' && n.tagName === 'code');
            if (codeEl && codeEl.properties && codeEl.properties.className) {
              const className = codeEl.properties.className;
              const lang = Array.isArray(className)
                ? className.find(c => c.startsWith('language-'))?.replace('language-', '')
                : className.replace('language-', '');
              
              if (lang) {
                node.properties['data-language'] = lang;
              }
            }
            return node;
          }
        }
      ]
    }
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark',
        wrap: true,
        transformers: [
          {
            pre(node) {
              // Add any available language as a data attribute
              const codeEl = node.children.find(n => n.type === 'element' && n.tagName === 'code');
              if (codeEl && codeEl.properties && codeEl.properties.className) {
                const className = codeEl.properties.className;
                const lang = Array.isArray(className)
                  ? className.find(c => c.startsWith('language-'))?.replace('language-', '')
                  : className.replace('language-', '');
                
                if (lang) {
                  node.properties['data-language'] = lang;
                }
              }
              return node;
            }
          }
        ]
      }
    }),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ]
})
