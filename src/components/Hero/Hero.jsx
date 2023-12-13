// import React from 'react'
import './Hero.scss'



const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__img"></div>

                    <div className="hero__item">
                        <h3 className="hero__title">The circles pristine cleanliness</h3>
                        <div className="name">
                            <img className="icon" src="/public/user-icon.svg" alt="" />
                            <p>Tung Tran</p>
                        </div>

                        <div className="price">
                            <div className="price__item">
                                <p className="price__item-title">Current Bid</p>
                                <div className="price__item-inner">
                                    <div className="price__item-box">
                                        <b>0.85 ETH</b>
                                        <p>$2,169.42</p>
                                    </div>
                                </div>
                            </div>

                            <div className="price__item">
                                <p className="price__item-title">Auction ends in</p>
                                <div className="price__item-inner">
                                    <div className="price__item-box">
                                        <b>3</b>
                                        <p>Hours</p>
                                    </div>
                                    <div className="price__item-box">
                                        <b>16</b>
                                        <p>Minutes</p>
                                    </div>
                                    <div className="price__item-box">
                                        <b>58</b>
                                        <p>Seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="place-bid">
                            <a className="btn" href="#">Place a bid</a>
                            <a className="btn-link" href="#">View artwork</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero