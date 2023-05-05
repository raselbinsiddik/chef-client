// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useContext } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import {  useLoaderData} from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Recipe = () => {
    // eslint-disable-next-line no-unused-vars
    const { loading } = useContext(AuthContext);
    const food = useLoaderData();
    const { chef_name, chef_picture, food1_img, food2_img, food3_img, likes, description, years_of_experience, num_recipes, rating, recipe_name1, recipe_name2, recipe_name3 } = food;

    if (loading) {
        return <Spinner animatin="border" variant="primary" />
    }

    const handleAccept = () => {
        toast('the recipe is your favorite is accept')
        
       
    }
   
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-6 rounded-md mt-4'>
                <div>
                    <img className='rounded-circle w-full h-full' src={chef_picture} alt="" />
               </div>
                <div className='mx-auto text-2xl  mt-16 mb-3'>
                    <h2 className='mb-2 text-3xl font-bold'>My Name: {chef_name}</h2>
                    <p className='mb-2'>MY Experience:  {years_of_experience}Years</p>
                    <p className='mb-2'>Numbers of recipes: {num_recipes} items</p>
                    <p>Likes: {likes}</p>
                    <p>{description}</p>
                </div>

            </div>
            <div>
                <div className='text-center text-4xl font-bold mt-5 mb-5'>
                    <h1>Here is Some Of My Recipe</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    <div className='mr-2 border-2 mb-2'>
                        <img className='rounded-md w-full h-72' src={food1_img} alt="" />
                        <div className='mx-auto text-2xl text-yellow-800 mt-10 mb-3'>
                            <h2 className='mb-2'>Name: {recipe_name1}</h2>
                            <p className='mb-2'>Rating: <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}>
                            </Rating>
                                <span>{rating?.number}</span>{rating}
                            </p>


                            <p>Likes: {likes}</p>
                            <button onClick={handleAccept} className='bg-yellow-300 p-3 rounded-lg mt-2 '>Favourite</button>
                        </div>
                    </div>
                    <div className='border-2 mb-2'>
                        <img className='rounded-md w-full h-72' src={food2_img} alt="" />
                        <div className='mx-auto text-2xl text-yellow-800 mt-10 mb-3'>
                            <h2 className='mb-2'>Name: {recipe_name2}</h2>
                            <p className='mb-2'>Rating:  <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}>
                            </Rating>
                                <span>{rating?.number}</span>{rating}</p>
                            <p>Likes: {likes}</p>
                            <button onClick={handleAccept} className='bg-yellow-300 p-3 rounded-lg mt-2' >Favourite</button>
                        </div>
                    </div>
                    <div className='ms-2 border-2 mb-2'>
                        <img className='rounded-md w-full h-72' src={food3_img} alt="" />
                        <div className='mx-auto text-2xl text-yellow-800 mt-10 mb-3'>
                            <h2 className='mb-2'>Name: {recipe_name3}</h2>
                            <p className='mb-2'>Rating:  <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}>
                            </Rating>
                                <span>{rating?.number}</span>{rating}</p>
                            <p>Likes: {likes}</p>
                            <button onClick={handleAccept} className='bg-yellow-300 p-3 rounded-lg mt-2'>Favourite</button>
                        </div>
                    </div>
                </div>
            </div>
       </Container>
    );
};

export default Recipe;