import React from 'react';
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaFilm } from "react-icons/fa6"; 

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-20 font-poppins">
            
            <div className="container mx-auto p-10">
                <div className="footer grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    <aside className="flex flex-col items-start">
                        <div className='flex items-center gap-2 text-3xl font-bold text-primary mb-2'>
                            <FaFilm /> MovieMaster pro
                        </div>
                        <p className="text-base mb-4">
                            Your ultimate destination for movie tracking. Organize, discover, and enjoy.
                        </p>
                        <p className='text-sm text-gray-500'>
                            Dhaka, Bangladesh <br/>
                            Support: hello@moviemaster.com
                        </p>
                    </aside>

                    
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-lg opacity-100 mb-2">Services</h6> 
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav> 

                    
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-lg opacity-100 mb-2">Company</h6> 
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav> 

                    
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-lg opacity-100 mb-2">Legal</h6> 
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </div>

           
            <div className="bg-base-300 py-8">
                <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h6 className="footer-title text-lg opacity-100 mb-1">Subscribe to Newsletter</h6> 
                        <p className="text-sm">Stay updated with the latest movie additions and features.</p>
                    </div> 
                    <div className="join w-full md:w-auto justify-center">
                        <input className="input input-bordered join-item w-full md:w-80" placeholder="Enter your email address" /> 
                        <button className="btn btn-primary join-item px-6">Subscribe</button>
                    </div>
                </div>
            </div>

           
            <div className="bg-neutral text-neutral-content py-6">
                <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <aside className="text-center md:text-left">
                        <p>© {new Date().getFullYear()} MovieMaster Pro. All rights reserved.</p>
                    </aside> 
                    
                    <nav>
                        <div className="flex gap-6 justify-center">
                            <a href="https://twitter.com" target="_blank" className='text-2xl hover:text-primary transition-transform hover:scale-110'><FaXTwitter /></a>
                            <a href="https://facebook.com" target="_blank" className='text-2xl hover:text-blue-500 transition-transform hover:scale-110'><FaFacebook /></a>
                            <a href="https://youtube.com" target="_blank" className='text-2xl hover:text-red-500 transition-transform hover:scale-110'><FaYoutube /></a>
                            <a href="https://linkedin.com" target="_blank" className='text-2xl hover:text-blue-400 transition-transform hover:scale-110'><FaLinkedin /></a>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;