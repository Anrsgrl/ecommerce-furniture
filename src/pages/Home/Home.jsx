import React from 'react';
import Hero from './components/Hero/Hero';
import HomeCollection from './components/HomeCollection/HomeCollection';
import HomeSale from './components/HomeSale/HomeSale';
import HomeServices from './components/HomeServices/HomeServices';
import HomeProducts from './components/HomeProducts/HomeProducts';
import Testimonials from './components/Testimonials/Testimonials';
import HomeConnect from './components/HomeConnect/HomeConnect';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <HomeCollection />
            <HomeServices />
            <HomeSale />
            <HomeProducts />
            <Testimonials />
            <HomeConnect />
        </div>
    )
}

export default Home;