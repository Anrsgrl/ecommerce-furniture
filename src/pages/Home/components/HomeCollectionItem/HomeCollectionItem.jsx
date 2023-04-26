import React from 'react';
import "./homeCollectionItem.scss";
import { useNavigate } from 'react-router-dom';

const HomeCollectionItem = (props) => {
    const { image, title, comment, reverse } = props;
    const navigate = useNavigate();
    return (
        <div className="row pt-3 g-0" style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
            <div className="col-12 col-md-4">
                <div className="collection-img p-2">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="collection-title col-12 col-md-8">
                <div className="title-content">
                    <h2>{title}</h2>
                    <h6 className='mt-3'>{comment}</h6>
                    <button onClick={() => navigate("/shop")} className='general-button mt-4'>View Collections</button>
                </div>
            </div>
        </div>
    )
}

export default HomeCollectionItem;