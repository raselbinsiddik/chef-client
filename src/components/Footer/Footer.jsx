// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaInstagram, FaTwitter, FaVoicemail, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-center text-2xl bg-slate-700 text-white p-4 mt-5'>
            <h1>Contact With Us</h1>
            <h2>All Reserved And &copy;Copyright<span></span></h2>
            <div className='flex justify-center mt-3 text-yellow-600 p-3 text-4xl'>
                <FaYoutube></FaYoutube>
                <FaInstagram className='ms-6 mr-6'></FaInstagram>
                <FaTwitter></FaTwitter>
                <FaVoicemail className='ms-6 mr-6'></FaVoicemail>
                <FaWhatsapp></FaWhatsapp>
            </div>
            
        </div>
    );
};

export default Footer;