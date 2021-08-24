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
            'tech_ops_introduction',
            'incident_management',
            'problem_management',
            'change_management',
            'release_management',
            'defect_triage',
            'key_terms_kpis',
            'incident_management_escalation_matrix',
            'service_level_agreements'
          ]
        },
        {
          title: 'Settlement Management Guide',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'settlement_management_introduction',
            'settlement_basic_concepts',
            'ledgers_in_the_hub',
          ]
        },
        {
          title: 'Guide to Finance Portal v2 (Business Operations portal)',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'busops_portal_introduction',
            'settlement_business_process',
            'accessing_the_portal',
            'managing_windows',
            'checking_settlement_details',
            'monitoring_dfsp_financial_details',
            'recording_funds_in_out',
            'updating_ndc'
          ]
        },
        {  
          title: 'Roled Based Access Control',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            'Role-based-access-control'
          ]
        }      
      ]
    }
    /*sidebar: {
      '/guides/': getSidebar('Technical Operations Guide', 'Settlement Management Guide'),
      /'/technical_operations_guide/': getSidebarTechOps('Technical Operations Guide')
    }*/
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}

/*function getSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: true,
      sidebarDepth: 2,
      children: [
        'tech_ops_introduction',
        'incident_management'
      ]
    },
    {
      title: groupB,
      collapsable: true,
      sidebarDepth: 2,
      children: [
        'settlement_management_introduction'
      ]
    }
  ]
}*/

/*function getSidebarTechOps (groupB) {
  return [
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        '',
        'incident_management'
      ]
    }
  ]
}*/