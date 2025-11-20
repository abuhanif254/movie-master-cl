import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Movies</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com" target="_blank" className='text-2xl'><FaTwitter /></a>
                    <a href="https://youtube.com" target="_blank" className='text-2xl'><FaYoutube /></a>
                    <a href="https://facebook.com" target="_blank" className='text-2xl'><FaFacebook /></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by MovieMaster Pro</p>
            </aside>
        </footer>
    );
};

export default Footer;