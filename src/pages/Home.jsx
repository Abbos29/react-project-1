// import React from 'react'

import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import CatalogList from "../components/CatalogList/CatalogList"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <div className="main">
        <Header/>
        <Hero/>
        <CatalogList/>
        <Footer/>
    </div>
  )
}

export default Home