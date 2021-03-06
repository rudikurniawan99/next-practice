import React from 'react'
import Head from 'next/head'

const Layout = ({ children, title }: { children: React.ReactElement, title: string }) => {
  return (
    <div>
      <Head>
        <title>{title ?? 'Next Practice'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}

export default Layout