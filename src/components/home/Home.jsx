import React from "react";
import Hero from "./hero/Hero";
import AboutCard from '../about/AboutCard';
import HAbout from './hero/HAbout';
import Testimonial from "./testimonial/Test";
import Hblog from './Hblog';

const Home = () => {
    return (
        <>
            <Hero />
            <AboutCard />
            <HAbout />
            <Testimonial />
            <Hblog />
        </>
    );
};

export default Home;
