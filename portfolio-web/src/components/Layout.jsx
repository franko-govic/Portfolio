import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Home } from './Home'

function Layout() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default Layout