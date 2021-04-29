import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import work1 from '../../images/carousel-1.png';
import work2 from '../../images/carousel-2.png';
import work4 from '../../images/carousel-4.png';
import work5 from '../../images/carousel-5.png';

const OurWorks = () => (
    <div id="our-portfolio" className="our-work">
        <div className="our-work__title">
            Here are some of <span className="our-work__title--span"> our works</span>
        </div>
        <div className="our-work__carousel">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
                <div className="item">
                    <img src={work1} alt="" />
                </div>
                <div className="item">
                    <img src={work2} alt="" />
                </div>
                <div className="item">
                    <img src={work1} alt="" />
                </div>
                <div className="item">
                    <img src={work4} alt="" />
                </div>
                <div className="item">
                    <img src={work5} alt="" />
                </div>
            </OwlCarousel>
        </div>
    </div>
);

export default OurWorks;
