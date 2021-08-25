const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mojaloop Business Operations Framework for Hub Operators',
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
    repo: '',
    editLinks: false,
    /*docsDir: 'mojaloop-business-docs/vuepress/docs',*/
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guides',
        link: '/guides/',
      }
      /*{
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }*/
    ],
    sidebar: {
      '/guides/': [
        {
          title: 'Technical Operations Guide',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'tech-ops-introduction',
            'incident-management',
            'problem-management',
            'change-management',
            'release-management',
            'defect-triage',
            'key-terms-kpis',
            'incident-management-escalation-matrix',
            'service-level-agreements'
          ]
        },
        {
          title: 'Settlement Management Guide',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'settlement-management-introduction',
            'settlement-basic-concepts',
            'ledgers-in-the-hub',
          ]
        },
        {
          title: 'Guide to Finance Portal v2',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'busops-portal-introduction',
            'settlement-business-process',
            'accessing-the-portal',
            'managing-windows',
            'checking-settlement-details',
            'monitoring-dfsp-financial-details',
            'recording-funds-in-out',
            'updating-ndc'
          ]
        },
        {  
          title: 'Roled-Based Access Control',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'Role-based-access-control'
          ]
        }      
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}