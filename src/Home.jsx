import React from 'react'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Category from './components/Category'
import MostSearched from './components/MostSearched'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'




function Home() {
  return (
      <div>
          {/* Navbar */}
          <Header />
          {/* Heros Section */}
          <Herosection />
          {/* Category by Type */}
          <Category />
          {/* Most Searched Car */}
          <MostSearched />
          {/* About information */}
          <AboutUs />
          {/* Contact information/ Footer */}
          <Footer />
      </div>
  )
}

export default Home