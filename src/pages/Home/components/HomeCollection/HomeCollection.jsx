import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
                <HomeCollectionItem
                    image='https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2020/02/chair.jpg'
                    title='Chair Collection!'
                    comment='Launch Offer 15% Off!'
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2020/02/wooden-chair-collections.jpg'
                    title='Modern Collection!'
                    comment='New Season Stock'
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default HomeCollection