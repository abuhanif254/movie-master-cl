import React from 'react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Movies</a>
                <a className="link link-hover">Press Kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-6">
                    
                    <a href="https://twitter.com" target="_blank" className='text-2xl hover:text-primary transition-colors'>
                        <FaXTwitter /> 
                    </a>
                    <a href="https://youtube.com" target="_blank" className='text-2xl hover:text-red-600 transition-colors'>
                        <FaYoutube />
                    </a>
                    <a href="https://facebook.com" target="_blank" className='text-2xl hover:text-blue-600 transition-colors'>
                        <FaFacebook />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by MovieMaster Pro</p>
            </aside>
        </footer>
    );
};

export default Footer;