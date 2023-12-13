// import React from 'react'
import './Card.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Card = ({ img, icon, title, user, bid }) => {
    return (
        <div className="card">

            <LazyLoadImage className='card-img'
                alt={''}
                effect='blur'
                src={img}
            />
            {/* <img className="card-img" src={img} alt="" /> */}

            <div className="box">
                <h3>{title}</h3>

                <div className="price">
                    <div className="name">
                        <img className="icon" src={icon} alt="" />
                        <p>{user}</p>
                    </div>

                    <div className="bid">
                        <p>Current Bid</p>
                        <b>{bid}</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card