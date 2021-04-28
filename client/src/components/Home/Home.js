import React from 'react';
import homeImage from '../../images/home.png';
import Navbar from './Navbar';

const Home = () => (
    <div className="home">
        <div className="home__nav">
            <Navbar />
        </div>
        <div className="home__container">
            <div className="home__container--left">
                <div className="home__container--left-title">
                    Let’s Grow Your Brand To The Next Level
                </div>
                <div className="home__container--left-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum
                    duis laoreet maecenas. Feugiat{' '}
                </div>
                <button className="home__container--left-button" type="button">
                    Hire us
                </button>
            </div>
            <img className="home__container--image" src={homeImage} alt="" />
        </div>
    </div>
);

export default Home;
