import React from 'react'
import Navbar from './components/Navbar'
import Premium from './components/Premium'
import WebMarketing from './components/WebMarketing'
import Templates from './components/Templates'
import Customer from './components/Customer'
import TrustPiolet from './components/TrustPiolet'
import CustomerServices from './components/CustomerServices'
import Footer from './components/Footer'




function App() {
  return (
    <>
      <Navbar> </Navbar>
      <Premium> </Premium>
      <WebMarketing />
      <Templates />
      <Customer />
      <TrustPiolet />
      <CustomerServices />
      <Footer />
    </>
  )
}

export default App