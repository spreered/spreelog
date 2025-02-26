import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import {
  transformerMetaHighlight,
  transformerNotationDiff,
} from '@shikijs/transformers'
import { defineConfig } from 'astro/config'
import rehypeKatex from 'rehype-katex'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'
import sectionize from '@hbsnow/rehype-sectionize'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.spreered.com',
  redirects: {
    '/compiler_for_dummies': '/blog/compiler_for_dummies',
    '/arrow-function-this': '/blog/arrow-function-this',
    '/ask-job-deal-with-string': '/blog/ask-job-deal-with-string',
    '/ask-job-deploy-and-job': '/blog/ask-job-deploy-and-job',
    '/ask-job-line-bot': '/blog/ask-job-line-bot',
    '/ask-job-line-bot-2-ruby-crawler': '/blog/ask-job-line-bot-2-ruby-crawler',
    '/ask-job-line-bot-3-line-message-api': '/blog/ask-job-line-bot-3-line-message-api',
    '/ask-job-line-bot-4-webhook': '/blog/ask-job-line-bot-4-webhook',
    '/bootstrap_iterm_zsh': '/blog/bootstrap_iterm_zsh',
    '/coscup-2020-ruby-junior-developer-will-survive': '/blog/coscup-2020-ruby-junior-developer-will-survive',
    '/countdown-timer-with-css-pie-chart': '/blog/countdown-timer-with-css-pie-chart',
    '/explicit-implicit-conversion-in-ruby': '/blog/explicit-implicit-conversion-in-ruby',
    '/knowing-ruby-object': '/blog/knowing-ruby-object',
    '/knowing-ruby-splat-operater': '/blog/knowing-ruby-splat-operater',
    '/learn-rail-by-ruby': '/blog/learn-rail-by-ruby',
    '/metaprogramming-ruby-1': '/blog/metaprogramming-ruby-1',
    '/metaprogramming-ruby-2-dynamic-method': '/blog/metaprogramming-ruby-2-dynamic-method',
    '/metaprogramming-ruby-3-block': '/blog/metaprogramming-ruby-3-block',
    '/ruby-object-model-1': '/blog/ruby-object-model-1',
    '/ruby-object-model-include-prepend-extend': '/blog/ruby-object-model-include-prepend-extend',
    '/ruby_reference': '/blog/ruby_reference',
    '/shi-shui-zai-ha-luo': '/blog/shi-shui-zai-ha-luo',
    '/yue-du-bi-ji-ke-yi-lian-xi-guan-yu-tian-fen-yu-nu-li': '/blog/yue-du-bi-ji-ke-yi-lian-xi-guan-yu-tian-fen-yu-nu-li'
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    react(),
    icon(),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
      rehypeHeadingIds,
      rehypeKatex,
      sectionize,
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'github-light-high-contrast',
            dark: 'github-dark-high-contrast',
          },
          transformers: [
            transformerNotationDiff(),
            transformerMetaHighlight(),
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 1000,
            }),
          ],
        },
      ],
    ],
    remarkPlugins: [remarkToc, remarkMath, remarkEmoji],
  },
  server: {
    port: 1234,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
})
