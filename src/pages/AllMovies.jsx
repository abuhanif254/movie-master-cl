import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://movie-master-ser.vercel.app/movies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching movies:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className='my-10'>
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">All Movies</h2>
            
            
            {
                movies.length === 0 ? (
                    <p className="text-center text-xl">No movies found. Please add some!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {
                            movies.map(movie => <MovieCard key={movie._id} movie={movie} />)
                        }
                    </div>
                )
            }
        </div>
    );
};

export default AllMovies;