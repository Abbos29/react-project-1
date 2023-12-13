// import React from 'react'

import CatalogList from "../components/CatalogList/CatalogList.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Header from "../components/Header/Header.jsx"



const Catalog = () => {
  return (
    <div className="main">
        <Header/>
        <CatalogList/>

        <Footer/>
    </div>
  )
}

export default Catalog