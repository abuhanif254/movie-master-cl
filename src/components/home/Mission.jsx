import React from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
    return (
        <section className="py-20 bg-base-200" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 w-full relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1512070634688-c969695f325c?q=80&w=2670&auto=format&fit=crop"
                                alt="Our Mission"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-2xl z-0 hidden lg:block"></div>
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                        <h3 className="text-xl md:text-2xl text-primary font-semibold mb-6">Connecting Movie Lovers Globally</h3>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            At MovieMaster Pro, we believe that every movie tells a story, and every viewer has a voice.
                            Our mission is to create the ultimate platform where cinephiles can discover new favorites,
                            track their journey, and share their passion with a like-minded community.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <div className="stats shadow bg-base-100">
                                <div className="stat place-items-center">
                                    <div className="stat-title">Users</div>
                                    <div className="stat-value text-primary">10K+</div>
                                </div>
                                <div className="stat place-items-center">
                                    <div className="stat-title">Movies</div>
                                    <div className="stat-value text-secondary">50K+</div>
                                </div>
                            </div>
                            <Link to="/about" className="btn btn-outline btn-lg self-center">Read Our Story</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
