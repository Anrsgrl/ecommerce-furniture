import React from 'react';
import HomeConnectItem from './HomeConnectItem';
import "./homeConnect.scss";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineGoogle, AiFillInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const HomeConnect = () => {
    return (
        <div className="home-connect page-container">
            <h3>Connect with us!</h3>
            <div className="connections">
                <HomeConnectItem logo={<AiFillFacebook />} />
                <HomeConnectItem logo={<AiOutlineTwitter />} />
                <HomeConnectItem logo={<AiOutlineGoogle />} />
                <HomeConnectItem logo={<AiFillInstagram />} />
                <HomeConnectItem logo={<FaPinterestP />} />
            </div>
        </div>
    )
}

export default HomeConnect;