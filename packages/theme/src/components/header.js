import React from 'react'

const ThemeHeader = ({ children }) => (
  <section
    style={{
      // Header Specific Styling //
      padding: '10px',
      backgroundColor: 'blue',
    }}
  >
    {children}
  </section>
)

export default ThemeHeader
