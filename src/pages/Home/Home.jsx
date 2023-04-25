import React from 'react';
import Hero from './components/Hero/Hero';
import HomeCollection from './components/HomeCollection/HomeCollection';
import HomeSale from './components/HomeSale/HomeSale';
import HomeServices from './components/HomeServices/HomeServices';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <HomeCollection />
            <HomeServices />
            <HomeSale />
        </div>
    )
}

export default Home;