// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container } from 'react-bootstrap';
import {  useLoaderData} from 'react-router-dom';

const Recipe = () => {
    // eslint-disable-next-line no-unused-vars
    const a = useLoaderData();
    const { chef_name, chef_picture, food1_img, food2_img, food3_img, likes, description, years_of_experience, num_recipes, rating, recipe_name1, recipe_name2, recipe_name3 } = a;

    console.log(a);
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-6 bg-red-100 rounded-md mt-4'>
                <img className='rounded-md w-full h-72' src={chef_picture} alt="" />
                <div className='mx-auto text-2xl text-yellow-800 mt-10 mb-3'>
                    <h2 className='mb-2'>Name: {chef_name}</h2>
                    <p className='mb-2'>Experience:  {years_of_experience}Years</p>
                    <p className='mb-2'>Numbers of recipes: {num_recipes}</p>
                    <p>Likes: {likes}</p>
                    <p>{description}</p>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
                    <div className='mr-2 border-2 mb-2'>
                        <img className='rounded-md w-full h-72' src={food1_img} alt="" />
                        <div className='mx-auto text-2xl text-yellow-800 mt-10 mb-3'>
                        <h2 className='mb-2'>Name: {recipe_name1}</h2>
                            <p className='mb-2'>Rating:  {rating}</p>
                        <p>Likes: {likes}</p>
                        <button className='bg-yellow-300 p-3 rounded-lg mt-2'>Favourite</button>
                        </div>
                   </div>
                <div className='border-2 mb-2'>
                    <img className='rounded-md w-full h-72' src={food2_img} alt="" />
                        <div className='mx-auto text-2xl text-yellow-800 mt-10 mb-3'>
                            <h2 className='mb-2'>Name: {recipe_name2}</h2>
                            <p className='mb-2'>Rating:  {rating}</p>
                        <p>Likes: {likes}</p>
                        <button className='bg-yellow-300 p-3 rounded-lg mt-2'>Favourite</button>
                        </div>
                    </div>
                <div className='ms-2 border-2 mb-2'>
                        <img className='rounded-md w-full h-72' src={food3_img} alt="" />
                        <div className='mx-auto text-2xl text-yellow-800 mt-10 mb-3'>
                            <h2 className='mb-2'>Name: {recipe_name3}</h2>
                            <p className='mb-2'>Rating:  {rating}</p>
                        <p>Likes: {likes}</p>
                        <button className='bg-yellow-300 p-3 rounded-lg mt-2'>Favourite</button>
                        </div>
                   </div>
           </div>
       </Container>
    );
};

export default Recipe;