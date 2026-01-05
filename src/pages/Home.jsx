import React, { useEffect, useState } from 'react';
import Hero from '../components/home/Hero';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';
import StatsSection from '../components/StatsSection';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// New Sections
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import Newsletter from '../components/home/Newsletter';
import Mission from '../components/home/Mission';
import Categories from '../components/home/Categories';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

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

    const handleGenreClick = (genre) => {
        if (selectedGenre === genre) {
            setSelectedGenre(null);
        } else {
            setSelectedGenre(genre);
        }
    };

    const filteredMovies = selectedGenre
        ? movies.filter(movie => movie.genre === selectedGenre)
        : [];

    if (loading) return <LoadingSpinner />;

    // Top rated logic could be improved, simplistic sort here
    const featuredMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
    const recentMovies = [...movies].reverse().slice(0, 6);

    return (
        <div className="font-poppins overflow-hidden">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Featured Movies */}
            <section className='my-20 container mx-auto px-4' data-aos="fade-up">
                <div className="text-center mb-12">
                    <h2 className='text-3xl font-bold text-center mb-2 border-l-4 border-primary pl-4 inline-block'>
                        Featured Movies
                    </h2>
                    <p className='text-center text-gray-500'>Top rated movies recommended for you</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {featuredMovies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
                </div>
                <div className='text-center mt-12'>
                    <Link to="/movies" className='btn btn-outline btn-primary btn-lg px-12'>See All Movies</Link>
                </div>
            </section>

            {/* 3. Categories / Browse by Genre */}
            <Categories onSelectGenre={handleGenreClick} selectedGenre={selectedGenre} />

            {/* Filtered Results Display */}
            {selectedGenre && (
                <section className="container mx-auto px-4 mb-20 animate-fade-in">
                    <div className='bg-base-200 p-8 rounded-2xl shadow-inner'>
                        <h3 className='text-2xl font-bold mb-6 text-primary'>
                            {filteredMovies.length} Results for "{selectedGenre}"
                        </h3>
                        {filteredMovies.length > 0 ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {filteredMovies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
                            </div>
                        ) : (
                            <div className='text-center py-10'>
                                <p className='text-xl text-gray-500'>No movies found in this genre.</p>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* 4. Stats Section (Existing) */}
            <StatsSection />

            {/* 5. Recently Added */}
            <section className='my-20 container mx-auto px-4' data-aos="fade-up">
                <div className="text-center mb-12">
                    <h2 className='text-3xl font-bold text-center mb-2 border-l-4 border-secondary pl-4 inline-block'>
                        New Arrivals
                    </h2>
                    <p className='text-center text-gray-500'>Fresh movies just added to our collection</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {recentMovies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
                </div>
            </section>

            {/* 6. How It Works */}
            <HowItWorks />

            {/* 7. Pricing Plan */}
            <Pricing />

            {/* 8. Mission Statement */}
            <Mission />

            {/* 9. Testimonials */}
            <Testimonials />

            {/* 10. FAQ */}
            <FAQ />

            {/* 11. Newsletter */}
            <Newsletter />

        </div>
    );
};

export default Home;