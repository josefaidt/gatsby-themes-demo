import React from 'react'

const ThemeLayout = ({ children }) => (
  <div
    style={{
      // Layout styling //
      margin: '10%',
      backgroundColor: 'whitesmoke',
    }}
  >
    {children}
  </div>
)

export default ThemeLayout
