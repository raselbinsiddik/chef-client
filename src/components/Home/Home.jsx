// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import HomeData from '../HomeData/HomeData';
import { AuthContext } from '../../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const { loading } = useContext(AuthContext);
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error));
    }, [])
    
    if (loading) {
        return <Spinner animatin="border" variant="primary" />
    }
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