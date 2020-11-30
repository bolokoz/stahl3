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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
    editLinkText: 'achei um erro, sugerir correção',
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
