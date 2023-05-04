// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import HomeData from '../HomeData/HomeData';
import { AuthContext } from '../../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import banner1 from  '../../assets/banner1.jpg'
import banner2 from  '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import bang1 from '../../assets/bang1.jpg'
import bang2 from '../../assets/bang2.jpg'
import bang3 from '../../assets/bang3.jpg'



const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const { loading } = useContext(AuthContext);
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://the-chef-server1-raselbinsiddik.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error));
    }, [])
    
    if (loading) {
        return <Spinner animatin="border" variant="primary" />
    }
    return (
        <div>
            {/* foods rae need */}
            <div className='taxt-center m-5'>
                <div className='text-center'>
                    <h1 className='text-center text-3xl font-bold mt-4 mb-4'>Foods are need in our heatlth</h1>

                    <p className='taxt-center m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto accusantium nulla nam repellat sequi eveniet nisi voluptas voluptatem, aperiam labore ex impedit est, expedita provident. Possimus, deserunt? Eos, repellendus.</p>
               </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 text-center'>
                    <div className='rounded-lg mb-4 ms-3 mr-3 '>
                        <h1 className='text-xl font-bold mb-4'>Vegetavle important in our health</h1>
                        <div>
                            <img className='w-full h-full rounded-lg ' src={banner1} alt="" />
                       </div>
                    </div>
                    <div className='ms-3 mr-3 mb-4'>
                        <h1 className='text-xl font-bold mb-4'>Fruits are important in our health</h1>
                        <div> <img className='w-full h-full rounded-lg' src={banner2} alt="" />
                        </div>
                    </div>
                    <div className='ms-3 mr-3  mb-4'>
                        <h1 className='text-xl font-bold mb-4'>Meath important in our health</h1>
                        <div>
                            <img className='w-full h-full rounded-lg' src={banner3} alt="" />
                        </div>
                        </div>
</div>
            </div>

            {/* bangladeshi foods */}
            <div className='taxt-center m-5'>
                <div className='text-center' >
                    <h1 className='text-center text-3xl font-bold mt-4 mb-4'>Bangladeshi Rural Food</h1>

                    <p className='taxt-center m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iusto accusantium nulla nam repellat sequi eveniet nisi voluptas voluptatem, aperiam labore ex impedit est, expedita provident. Possimus, deserunt? Eos, repellendus.</p>
               </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 text-center'>
                    <div className=' mb-4 ms-3 mr-3 '>
                        
                            <img className='w-full h-full rounded-lg ' src={bang1} alt="" />
                       
                    </div>
                    <div className='ms-3 mr-3 mb-4'>
                         <img className='w-full h-full rounded-lg' src={bang2} alt="" />
                    </div>
                        
                        <div className='ms-3 mr-3  mb-4'>
                            <img className='w-full h-full rounded-lg' src={bang3} alt="" />
                        </div>
</div>
            </div>

            <div>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold mt-4 mb-2'>Some Chefs in Bangladesh in Dhaka</h1>
                    <p className='mb-4'>Chefs are very important in our life.we are love them very much and salute them.
                        Becouse they are cook we are eat.
                    </p>
               </div>
                {
                    chefs.map(chef => <HomeData key={chef}
                        chef={chef}></HomeData>)
                }
            </div>
        </div>
    );
};

export default Home;