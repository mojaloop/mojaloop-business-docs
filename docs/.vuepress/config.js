const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mojaloop Business Operations Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Mojaloop Business Operations Documentation set that can be used as templates by Schemes implementing Mojaloop',
  host: 'localhost',
  base: '/mojaloop-business-docs/',

  /**
   * Customize Markdown
   */
   markdown: {
    /// Options for markdown-it
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
    breaks:       true,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                // useful for external highlighters.
    // linkify:      false,        // Autoconvert URL-like text to links
  
    /// Enable some language-neutral replacement + quotes beautification
    /// For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
    typographer:  true,
  
    /// Double + single quotes replacement pairs, when typographer enabled,
    /// and smartquotes on. Could be either a String or an Array.
    ///
    /// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    /// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    // quotes: '“”‘’',
  
    /// Highlighter function. Should return escaped HTML,
    /// or '' if the source string is not changed and should be escaped externally.
    /// If result starts with <pre... internal wrapper is skipped.
    // highlight: function (/*str, lang*/) { return ''; }
    
    extendMarkdown: md => {
      md.use(require('markdown-it'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-multimd-table'), {
        /// Options for markdown-it-multimd-table
        multiline:  true,
        rowspan:    true,
        headerless: true,
      })
    }
  },

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
    repo: 'https://github.com/mojaloop/mojaloop-business-docs',
    docsBranch: 'master',
    editLinks: true,
    docsDir: 'docs',
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
            link: '/scheme/platform-operating-guideline.html'
          },
          {
            text: 'Scheme Business Rules Template',
            link: '/scheme/scheme-business-rules.html'
          },
          {
            text: 'Scheme Key Choices',
            link: '/scheme/scheme-key-choices.html'
          },
          {
            text: 'Scheme Participation Agreement Template',
            link: '/scheme/scheme-participation-agreement.html'
          },
          {
            text: 'Uniform Glossary Template',
            link: '/scheme/scheme-uniform-glossary.html'
          },
        ]
      },
      {
        text: 'Hub Operations',
        items: [
          {
            text: 'Technical Operations Guide',
            link: '/huboperations/techops/tech-ops-introduction.html'
          },
          {
            text: 'Settlement Management Guide',
            link: '/huboperations/settlement/settlement-management-introduction.html'
          },
          {
            text: 'Guide to Finance Portal v2',
            link: '/huboperations/portalv2/busops-portal-introduction.html'
          },
          {
            text: 'Roled-Based Access Control',
            link: '/huboperations/rbac/role-based-access-control.html'
          },
          {
            text: 'Onboarding Guide for the Hub Operator',
            link: '/huboperations/onboarding/onboarding-introduction.html'
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
      path: '/scheme/platform-operating-guideline',
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
      children: [
          '/scheme/platform-operating-guideline',
          '/scheme/scheme-business-rules',
          '/scheme/scheme-key-choices',
          '/scheme/scheme-participation-agreement',
          '/scheme/scheme-uniform-glossary'
      ]
    },
    {
      title: 'Hub Operations Guide',
      path: '/huboperations/techops/tech-ops-introduction',
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1,    // optional, defaults to 1
      children: [
        {
          title: 'Technical Operations Guide',
          collapsable: true,
          path: '/huboperations/techops/tech-ops-introduction',
          sidebarDepth: 2,
          children: [
            '/huboperations/techops/tech-ops-introduction',
            '/huboperations/techops/incident-management',
            '/huboperations/techops/problem-management',
            '/huboperations/techops/change-management',
            '/huboperations/techops/release-management',
            '/huboperations/techops/defect-triage',
            '/huboperations/techops/key-terms-kpis',
            '/huboperations/techops/incident-management-escalation-matrix',
            '/huboperations/techops/service-level-agreements'
          ]
        },
        {
          title: 'Settlement Management Guide',
          collapsable: true,
          path: '/huboperations/settlement/settlement-management-introduction',
          sidebarDepth: 2,
          children: [
            '/huboperations/settlement/settlement-management-introduction',
            '/huboperations/settlement/settlement-basic-concepts',
            '/huboperations/settlement/ledgers-in-the-hub'
          ]
        },
        {
          title: 'Guide to Finance Portal v2',
          collapsable: true,
          sidebarDepth: 2,
          children: [
            '/huboperations/portalv2/busops-portal-introduction',
            '/huboperations/portalv2/settlement-business-process',
            '/huboperations/portalv2/accessing-the-portal',
            '/huboperations/portalv2/managing-windows',
            '/huboperations/portalv2/settling',
            '/huboperations/portalv2/checking-settlement-details',
            '/huboperations/portalv2/monitoring-dfsp-financial-details',
            '/huboperations/portalv2/enabling-disabling-transactions',
            '/huboperations/portalv2/recording-funds-in-out',
            '/huboperations/portalv2/updating-ndc',
            '/huboperations/portalv2/searching-for-transfer-data'
          ]
        },
        {  
          title: 'Roled-Based Access Control',
          collapsable: true,
          path: '/huboperations/rbac/role-based-access-control',
          sidebarDepth: 2,
          children: [
            '/huboperations/rbac/role-based-access-control'
          ]
        },
        {  
          title: 'Onboarding Guide for the Hub Operator',
          collapsable: true,
          path: '/huboperations/onboarding/onboarding-introduction',
          sidebarDepth: 2,
          children: [
            '/huboperations/onboarding/onboarding-introduction',
            '/huboperations/onboarding/business-onboarding',
            '/huboperations/onboarding/technical-onboarding'
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
    'versioning',
    '@snowdog/vuepress-plugin-pdf-export',
    ['vuepress-plugin-medium-zoom'],
    [
      '@vuepress/last-updated',
      {
        dateOptions: {
          hours12: true,
        },
      }
    ]
  ]
}