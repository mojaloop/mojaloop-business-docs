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
    ['meta', { name: 'theme-color', content: '#00a3ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: 'titanium',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: 'Edit this page on GitHub',
    smoothScroll: true,
    lastUpdated: true,
    logo: '/mojaloop_logo_med.png',
    nav: [
      {
        text: 'Scheme Choices',
        items: [
          {
            text: 'Platform Operating Guideline Template',
            link: '/guides/platform-operating-guideline.html',
          },
          {
            text: 'Scheme Business Rules Template',
            link: '/guides/scheme-business-rules.html',
          },
          {
            text: 'Scheme Key Choices',
            link: '/guides/scheme-key-choices.html',
          },
          {
            text: 'Scheme Participation Agreement Template',
            link: '/guides/scheme-participation-agreement.html',
          },
          {
            text: 'Uniform Glossary Template',
            link: '/guides/scheme-uniform-glossary.html',
          },
        ]
      },
      {
        text: 'Hub Operations',
        items: [
          {
            text: 'Technical Operations Guide',
            link: '/guides/tech-ops-introduction.html',
          },
          {
            text: 'Settlement Management Guide',
            link: '/guides/settlement-management-introduction.html',
          },
          {
            text: 'Guide to Finance Portal v2',
            link: '/guides/busops-portal-introduction.html',
          },
          {
            text: 'Roled-Based Access Control',
            link: '/guides/Role-based-access-control.html',
          },
          {
            text: 'Onboarding Guide for the Hub Operator',
            link: '/guides/onboarding-introduction.html',
          },
        ]
      },
      {
        text: 'Mojaloop',
        link: 'https://mojaloop.io/'
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
          title: 'Platform Operating Guideline Template',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'platform-operating-guideline',
          ]
        },
        {
          title: 'Scheme Business Rules Template',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'scheme-business-rules',
          ]
        },
        {
          title: 'Scheme Key Choices',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'scheme-key-choices',
          ]
        },
        {
          title: 'Scheme Participation Agreement Template',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'scheme-participation-agreement',
          ]
        },
        {
          title: 'Uniform Glossary Template',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'scheme-uniform-glossary',
          ]
        },
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
            'settling',
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
        },
        {  
          title: 'Onboarding Guide for the Hub Operator',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'onboarding-introduction',
            'business-onboarding',
            'technical-onboarding',
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