// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useEffect } from 'react';
import HomeData from '../HomeData/HomeData';

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error));
    },[])
    return (
        <div>
            {
                chefs.map(chef => <HomeData key={chef}
                chef={chef}></HomeData>)
            }
        </div>
    );
};

export default Home;