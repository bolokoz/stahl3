const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'StahlHolz',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons`}],
    ['link', { rel: 'stylesheet', href: `https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css`}],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'bolokoz/stahl3',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Sugerir correção',
    lastUpdated: true,
    nav: [
      {
        text: 'Análise estrutural',
        link: '/analise_estrutural/',
      },
      {
        text: 'Metálicas',
        link: '/metalicas/'
      },
      {
        text: 'Madeiras',
        link: '/madeiras/'
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'beautiful-bar',
    'vuepress-plugin-mermaidjs',
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': '253952268' // UA-00000000-0
      }
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          ' * ': '\\times',
        },
      },
    ],
  ]
}
