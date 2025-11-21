import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';
import AboutSection from '../components/AboutSection'; 
import StatsSection from '../components/StatsSection'; 
import { Link } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa"; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

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

    const featuredMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
    const recentMovies = [...movies].reverse().slice(0, 6);
    const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller"];

    return (
        <div>
            <Banner />

           
            <AboutSection />

            
            <StatsSection />

            {/* Genre Section */}
            <div className='my-16 container mx-auto px-4' id="genre-section" data-aos="fade-up">
                <h2 className='text-3xl font-bold text-center mb-2 border-l-4 border-accent pl-4 inline-block'>
                    Browse by Genre
                </h2>
                <p className='text-center text-gray-500 mb-8'>Click on a genre to filter movies instantly</p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {
                        genres.map((genre, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => handleGenreClick(genre)}
                                className={`btn btn-outline px-8 ${selectedGenre === genre ? 'btn-active btn-primary text-white' : ''}`}
                            >
                                {genre}
                            </button>
                        ))
                    }
                </div>

                {
                    selectedGenre && (
                        <div className='bg-base-200 p-6 rounded-xl animate-fade-in'>
                            <h3 className='text-2xl font-bold mb-4 text-primary'>
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
                    )
                }
            </div>

           
            <div className='my-16' data-aos="fade-up">
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

            
            <div className='my-16' data-aos="fade-up">
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

           
            <div className="hero bg-base-200 rounded-xl p-10 my-16" data-aos="zoom-in">
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
                </div>
            </div>
        </div>
    );
};

export default Home;