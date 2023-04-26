import React from 'react';

const HomeConnectItem = (props) => {
    const { logo } = props;
    return (
        <div className="connect-item">
            <button className='connect-button'>{logo}</button>
        </div>
    )
}

export default HomeConnectItem;