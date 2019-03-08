module.exports = {
  plugins: [
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        globalScope: `
          import Header from '${__dirname}/src/components/Header.js'
          import { Paragraph } from '@josef/components'

          export default { Header, Paragraph }
        `,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'pages',
      },
    },
  ],
}
