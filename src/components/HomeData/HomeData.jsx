// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const HomeData = ({ chef }) => {
    
    const { id, chef_name, chef_picture, food1_img
    } = chef;
    console.log(chef);
    return (
        <div>
            <h2>{chef_name }</h2>
            <img src={chef_picture} alt="" />
            <img src={food1_img} alt="" />
        </div>
    );
};

export default HomeData;