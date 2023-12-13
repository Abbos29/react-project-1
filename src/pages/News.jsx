// import React from 'react'
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer"


const News = () => {
  return (
    <div className='main'>
        <Header/>
        <section className="news">
            <div className="container">
                <h2>Страница Новостей</h2>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default News