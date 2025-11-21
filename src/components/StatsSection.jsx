import React, { useEffect, useState } from 'react';
import { FaFilm, FaUsers, FaStar, FaVideo } from "react-icons/fa";

const StatsSection = () => {
    const [stats, setStats] = useState({ movieCount: 0, userCount: 0 });

    useEffect(() => {
        fetch('http://localhost:5000/stats')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="my-16 px-4">
             <div className="text-center mb-10" data-aos="fade-down">
                <h2 className="text-3xl font-bold text-primary">Platform Statistics</h2>
                <p className="text-gray-500 mt-2">Our growth at a glance</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
                
                <div className="stat bg-base-100 shadow-xl rounded-xl border-b-4 border-primary text-center py-8" data-aos="flip-left">
                    <div className="stat-figure text-primary text-4xl mx-auto mb-2">
                        <FaFilm />
                    </div>
                    <div className="stat-title font-bold text-lg">Total Movies</div>
                    <div className="stat-value text-primary">{stats.movieCount}</div>
                </div>

               
                <div className="stat bg-base-100 shadow-xl rounded-xl border-b-4 border-secondary text-center py-8" data-aos="flip-left" data-aos-delay="100">
                    <div className="stat-figure text-secondary text-4xl mx-auto mb-2">
                        <FaUsers />
                    </div>
                    <div className="stat-title font-bold text-lg">Active Users</div>
                    <div className="stat-value text-secondary">{stats.userCount}</div>
                </div>

                
                <div className="stat bg-base-100 shadow-xl rounded-xl border-b-4 border-accent text-center py-8" data-aos="flip-left" data-aos-delay="200">
                    <div className="stat-figure text-accent text-4xl mx-auto mb-2">
                        <FaStar />
                    </div>
                    <div className="stat-title font-bold text-lg">Total Reviews</div>
                    <div className="stat-value text-accent">1.2K+</div>
                </div>

               
                <div className="stat bg-base-100 shadow-xl rounded-xl border-b-4 border-info text-center py-8" data-aos="flip-left" data-aos-delay="300">
                    <div className="stat-figure text-info text-4xl mx-auto mb-2">
                        <FaVideo />
                    </div>
                    <div className="stat-title font-bold text-lg">Watch Time</div>
                    <div className="stat-value text-info">5K+ Hrs</div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;