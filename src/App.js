import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import TeeTime from './components/teeTime/TeeTime'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <TeeTime />
      <Footer />
    </div>
  )
}

export default App