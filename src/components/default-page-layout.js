import React from 'react'

import Checkout from './checkout'

const Page = ({children}) => {
  return (
    <div style={{
      maxWidth: 750,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto"
    }}>
      {children}
      <Checkout />
    </div>
  )
}

export default Page
