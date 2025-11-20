import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

import { FaFilm, FaUserShield } from "react-icons/fa"; 

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            })
            
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <LoadingSpinner />;

    
    const featuredMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);

    
    const recentMovies = [...movies].reverse().slice(0, 6);

    return (
        <div>
            
            <Banner />

            
            <div className='my-16'>
                <h2 className='text-3xl font-bold text-center mb-2 border-l-4 border-primary pl-4 inline-block'>
                     Featured Movies
                </h2>
                <p className='text-center text-gray-500 mb-10'>Top rated movies recommended for you</p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        featuredMovies.map(movie => <MovieCard key={movie._id} movie={movie} />)
                    }
                </div>
                <div className='text-center mt-8'>
                    <Link to="/movies" className='btn btn-outline btn-primary'>See All Movies</Link>
                </div>
            </div>

           
            <div className='my-16'>
                <h2 className='text-3xl font-bold text-center mb-2 border-l-4 border-secondary pl-4 inline-block'>
                     Recently Added
                </h2>
                <p className='text-center text-gray-500 mb-10'>Fresh movies just added to our collection</p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        recentMovies.map(movie => <MovieCard key={movie._id} movie={movie} />)
                    }
                </div>
            </div>

            
            <div className="hero bg-base-200 rounded-xl p-10 my-16">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold flex items-center justify-center lg:justify-start gap-3">
                            Become a Pro Member! <FaUserShield className='text-primary'/>
                        </h1>
                        <p className="py-6">
                            Unlock exclusive features, ad-free experience, and get early access to new movie releases. 
                            Join our premium community today.
                        </p>
                        <div className='flex gap-4 justify-center lg:justify-start'>
                            <button className="btn btn-primary">Get Started</button>
                            <button className="btn btn-ghost border border-gray-400">Learn More</button>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body text-center">
                            <div className="stats shadow w-full">
                                <div className="stat">
                                    <div className="stat-title flex justify-center items-center gap-2">
                                        <FaFilm /> Total Movies
                                    </div>
                                    <div className="stat-value text-primary">{movies.length}</div>
                                    <div className="stat-desc">Growing daily</div>
                                </div>
                            </div>
                            <div className="mt-4 text-lg font-semibold">
                                Subscribe to our Newsletter
                            </div>
                            <div className="join mt-2 justify-center">
                                <input className="input input-bordered join-item w-full" placeholder="Email" />
                                <button className="btn join-item btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;