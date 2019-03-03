import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const MdxPageTemplate = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <div>
      <h1>MDX PAGE TEMPLATE</h1>
      <h2 style={{ color: 'red' }}>{pageContext.meta.title}</h2>
      <MDXProvider>
        <MDXRenderer>{pageContext.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default MdxPageTemplate
