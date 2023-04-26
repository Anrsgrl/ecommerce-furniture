import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: "#3a3a3a" }} className='d-flex justify-content-between page-container p-5'>
            <div className="footer-left">
                <span className='text-white'>Copyright © 2023 Furniture Store</span>
            </div>
            <div className="footer-right">
                <span className='pe-1 text-white'>Made by</span>
                <span className='fw-bold' style={{ color: "#78909c", cursor: "pointer" }} onClick={() => { window.open("https://github.com/Anrsgrl") }}>Anrsgrl</span>
            </div>
        </footer>
    )
}

export default Footer;