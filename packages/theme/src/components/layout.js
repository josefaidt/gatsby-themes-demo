import React from 'react'
import '../styles/reset.css'

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
