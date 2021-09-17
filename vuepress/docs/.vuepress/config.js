const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mojaloop Business Operations Documentation' ,
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
            link: '/Scheme/platform-operating-guideline.html',
          },
          {
            text: 'Scheme Business Rules Template',
            link: '/Scheme/scheme-business-rules.html',
          },
          {
            text: 'Scheme Key Choices',
            link: '/Scheme/scheme-key-choices.html',
          },
          {
            text: 'Scheme Participation Agreement Template',
            link: '/Scheme/scheme-participation-agreement.html',
          },
          {
            text: 'Uniform Glossary Template',
            link: '/Scheme/scheme-uniform-glossary.html',
          },
        ]
      },
      {
        text: 'Hub Operations',
        items: [
          {
            text: 'Technical Operations Guide',
            link: '/HubOperations/TechOps/tech-ops-introduction.html',
          },
          {
            text: 'Settlement Management Guide',
            link: '/HubOperations/Settlement/settlement-management-introduction.html',
          },
          {
            text: 'Guide to Finance Portal v2',
            link: '/HubOperations/Portalv2/busops-portal-introduction.html',
          },
          {
            text: 'Roled-Based Access Control',
            link: '/HubOperations/RBAC/Role-based-access-control.html',
          },
          {
            text: 'Onboarding Guide for the Hub Operator',
            link: '/HubOperations/Onboarding/onboarding-introduction.html',
          },
        ]
      },
      {
        text: 'Mojaloop',
        link: 'https://mojaloop.io/'
      }
    ],
    sidebar: [
    {
      title: 'Scheme Guide',
      path: '/Scheme/platform-operating-guideline',
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
      children: [
          '/Scheme/platform-operating-guideline',
          '/Scheme/scheme-business-rules',
          '/Scheme/scheme-key-choices',
          '/Scheme/scheme-participation-agreement',
          '/Scheme/scheme-uniform-glossary'
      ]
    },
    {
      title: 'Hub Operations Guide',
      path: '/HubOperations/TechOps/tech-ops-introduction',
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
      children: [
        {
          title: 'Technical Operations Guide',
          collapsable: true,
          path: '/HubOperations/TechOps/tech-ops-introduction',
          sidebarDepth: 2,
          children: [
            '/HubOperations/TechOps/tech-ops-introduction',
            '/HubOperations/TechOps/incident-management',
            '/HubOperations/TechOps/problem-management',
            '/HubOperations/TechOps/change-management',
            '/HubOperations/TechOps/release-management',
            '/HubOperations/TechOps/defect-triage',
            '/HubOperations/TechOps/key-terms-kpis',
            '/HubOperations/TechOps/incident-management-escalation-matrix',
            '/HubOperations/TechOps/service-level-agreements'
          ]
        },
        {
          title: 'Settlement Management Guide',
          collapsable: true,
          path: '/HubOperations/Settlement/settlement-management-introduction',
          sidebarDepth: 2,
          children: [
            '/HubOperations/Settlement/settlement-management-introduction',
            '/HubOperations/Settlement/settlement-basic-concepts',
            '/HubOperations/Settlement/ledgers-in-the-hub',
          ]
        },
        {
          title: 'Guide to Finance Portal v2',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            '/HubOperations/Portalv2/busops-portal-introduction',
            '/HubOperations/Portalv2/settlement-business-process',
            '/HubOperations/Portalv2/accessing-the-portal',
            '/HubOperations/Portalv2/managing-windows',
            '/HubOperations/Portalv2/settling',
            '/HubOperations/Portalv2/checking-settlement-details',
            '/HubOperations/Portalv2/monitoring-dfsp-financial-details',
            '/HubOperations/Portalv2/recording-funds-in-out',
            '/HubOperations/Portalv2/updating-ndc'
          ]
        },
        {  
          title: 'Roled-Based Access Control',
          collapsable: true,
          path: '/HubOperations/RBAC/Role-based-access-control',
          sidebarDepth: 2,
          children: [
            '/HubOperations/RBAC/Role-based-access-control'
          ]
        },
        {  
          title: 'Onboarding Guide for the Hub Operator',
          collapsable: true,
          path: '/HubOperations/Onboarding/onboarding-introduction',
          sidebarDepth: 2,
          children: [
            '/HubOperations/Onboarding/onboarding-introduction',
            '/HubOperations/Onboarding/business-onboarding',
            '/HubOperations/Onboarding/technical-onboarding',
          ]
        }       
      ]
    }]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}