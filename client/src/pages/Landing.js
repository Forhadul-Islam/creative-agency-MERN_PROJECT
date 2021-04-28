import React from 'react';
import Feedback from '../components/Feedback/Feedback';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import OurWorks from '../components/OurWorks/OurWorks';
import Partners from '../components/Partners/Partners';
import Services from '../components/Services/Services';

const Landing = () => (
    <div>
        <Home />
        <Partners />
        <Services />
        <OurWorks />
        <Feedback />
        <Footer />
    </div>
);

export default Landing;
