import React from 'react'

const MyH1 = props => <h1 style={{ color: 'slate' }} {...props} />
const MyH2 = props => <h2 style={{ color: 'blueviolet' }} {...props} />
const MyParagraph = props => <p style={{ fontSize: '18px', lineHeight: 1.6 }} {...props} />

const components = {
  h1: MyH1,
  h2: MyH2,
  p: MyParagraph,
}

export default components
