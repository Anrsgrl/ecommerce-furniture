import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import "./header.scss";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const [hamburger, setHamburger] = useState(true);
    const [nav, setNav] = useState(false);
    console.log(nav)
    return (
        <header className='bg-white'>
            <div className="page-container">
                <div className="header-content">
                    <div className="header-left">
                        <div className="logo-part pe-4">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <ul className='dekstop-nav list-unstyled m-0'>
                            <li><NavLink to="/shop">All products</NavLink></li>
                            <li><NavLink>Sofa</NavLink></li>
                            <li><NavLink>Chair</NavLink></li>
                            <li><NavLink>Table</NavLink></li>
                        </ul>
                    </div>
                    <div className="header-right">
                        <p className='price'>£0.00</p>
                        <div className='cart'>
                            <HiShoppingCart />
                            <p className='cart-quantity'>0</p>
                        </div>
                        <div className="hamburger-menu">
                            {hamburger ? (<button onClick={() => { setNav(true); setHamburger(false) }}><GiHamburgerMenu /></button>) : (<button onClick={() => { setNav(false); setHamburger(true) }}><IoCloseSharp /></button>)}
                        </div>
                    </div>
                </div>
            </div>
            <ul className={nav ? 'mobile-nav open-nav  list-unstyled m-0' : 'mobile-nav list-unstyled m-0'}>
                <li><NavLink>All products</NavLink></li>
                <li><NavLink>Sofa</NavLink></li>
                <li><NavLink>Chair</NavLink></li>
                <li><NavLink>Table</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;