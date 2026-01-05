import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

const Hero = () => {
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop",
            title: "Unlimited Movie Magic",
            subtitle: "Discover, track, and curate your personal movie library with ease."
        },
        {
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
            title: "Join the Community",
            subtitle: "Share your favorites, read reviews, and connect with fellow cinephiles."
        },
        {
            image: "https://images.unsplash.com/photo-1517604931442-710c8ef5ad25?q=80&w=2669&auto=format&fit=crop",
            title: "Premium Experience",
            subtitle: "Unlock exclusive features and ad-free browsing with our Pro plan."
        }
    ];

    return (
        <section className="h-[65vh] w-full relative group">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect={'fade'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center">
                                <div className="text-center text-white px-4 max-w-4xl" data-aos="zoom-in" data-aos-duration="1000">
                                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-2xl mb-8 opacity-90 font-light max-w-2xl mx-auto">
                                        {slide.subtitle}
                                    </p>
                                    <div className="flex gap-4 justify-center">
                                        <Link to="/movies" className="btn btn-primary btn-lg border-none shadow-xl hover:scale-105 transition-transform">
                                            Explore Movies
                                        </Link>
                                        <Link to="/register" className="btn btn-outline btn-warning btn-lg shadow-xl hover:scale-105 transition-transform text-white">
                                            Join Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
