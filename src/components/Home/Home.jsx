// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import HomeData from '../HomeData/HomeData';
import { AuthContext } from '../../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import banner1 from  '../../assets/banner1.jpg'
import banner2 from  '../../assets/banner2.jpg'
import banner3 from  '../../assets/banner3.jpg'

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
            <div>
                <h1 className='text-center text-3xl font-bold mt-4 mb-4'>Foods are need in our heatlth</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 text-center'>
                    <div>
                        <h1>Vegetavle important in our health</h1>
                        <img className='w-full' src={banner1} alt="" /></div>
                    <div className='ms-3 mr-3'>
                        <h1>Fruits are important in our health</h1>
                        <img className='w-full' src={banner2} alt="" /></div>
                    <div>
                        <h1>Meat important in our health</h1>
                        <img className='w-full' src={banner3} alt="" /></div>
</div>
            </div>
            {
                chefs.map(chef => <HomeData key={chef}
                chef={chef}></HomeData>)
            }
        </div>
    );
};

export default Home;