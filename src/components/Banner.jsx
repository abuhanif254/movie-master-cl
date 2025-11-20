import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div className="my-6 rounded-2xl overflow-hidden shadow-2xl">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="h-[500px]"
            >
              
                <SwiperSlide>
                    <div 
                        className="hero h-full" 
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold text-white">
                                    Movie
                                    <span className='text-primary'>
                                        <Typewriter
                                            words={['Master', 'World', 'Hub']}
                                            loop={0}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>
                                <p className="mb-5">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
                                <Link to="/movies" className="btn btn-primary">Explore Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                
                <SwiperSlide>
                    <div 
                        className="hero h-full" 
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold text-white">Share Your Favorites</h1>
                                <p className="mb-5">Create your own collection and share it with the world. Rate and review movies.</p>
                                <Link to="/add-movie" className="btn btn-accent">Add Movie</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

               
                <SwiperSlide>
                    <div 
                        className="hero h-full" 
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1517604931442-71053e6e2306?q=80&w=2070&auto=format&fit=crop)'}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold text-white">Join the Community</h1>
                                <p className="mb-5">Connect with thousands of movie lovers. Discuss, debate, and discover.</p>
                                <Link to="/register" className="btn btn-secondary">Join Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;