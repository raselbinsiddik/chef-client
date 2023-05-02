// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import banner1 from '../../assets/banner1.jpg'
// eslint-disable-next-line no-unused-vars
import banner2 from '../../assets/banner2.jpg'
// eslint-disable-next-line no-unused-vars
import banner3 from '../../assets/banner3.jpg'
import Home from '../Home/Home';

const Banner = () => {
    // eslint-disable-next-line no-undef
    const [index, setIndex] = useState(0);

    // eslint-disable-next-line no-unused-vars
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Container>
            <Carousel className='mt-4 mb-4' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-4xl text-yellow-500 font-bold mb-4'>Differant Vegetable food</h3>
                        <p className='font-bold text-xl mb-16'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-4xl text-yellow-500 font-bold mb-4'>Different type in Fruite</h3>
                        <p className='font-bold text-xl mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-4xl text-yellow-500 font-bold mb-4'>Spycy Beef in Bengol</h3>
                        <p className='font-bold text-xl mb-16'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
            <Home></Home>
        </Container>
    );
};

export default Banner;