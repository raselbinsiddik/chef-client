// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const HomeData = ({ chef }) => {
    const {id, chef_name, chef_picture, likes, years_of_experience, num_recipes} = chef;
    console.log(chef);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 bg-red-100 rounded-md'>
            <img className='rounded-md w-full h-72' src={chef_picture} alt="" />
            <div className='mx-auto text-2xl text-yellow-800 mt-10'>
                <h2 className='mb-2'>Name: {chef_name}</h2>
                <p className='mb-2'>Experience:  {years_of_experience}Years</p>
                <p className='mb-2'>Numbers of recipes: {num_recipes}</p>
                <p>Likes: {likes}</p>
            </div>
            <Link to={`/recipe/${id}`} className='text-center mt-10 mb-4'><button className='bg-yellow-500 p-5 mt-3 text-3xl font-bold rounded-lg '>View Recipes</button></Link>
            
        </div>
    );
};

export default HomeData;