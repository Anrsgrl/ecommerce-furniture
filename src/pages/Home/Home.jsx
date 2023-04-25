import React from 'react';
import Hero from './components/Hero/Hero';
import HomeCollection from './components/HomeCollection/HomeCollection';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <HomeCollection />
        </div>
    )
}

export default Home;