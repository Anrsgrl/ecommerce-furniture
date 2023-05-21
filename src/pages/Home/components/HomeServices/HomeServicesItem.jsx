import React from 'react';

const HomeServicesItem = (props) => {
    const { image, title } = props;
    return (
        <div data-aos="fade-up" className="col-12 col-md-2 d-flex flex-column align-items-center text-center py-2">
            <div className="services-img">
                <img src={image} alt="" />
            </div>
            <h6 style={{ color: '#78909c' }}>{title}</h6>
        </div>
    )
}

export default HomeServicesItem;