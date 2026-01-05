import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthContext';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';

const MyCollection = () => {
    const { user } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(`http://localhost:5000/movies?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            });
    }, [user.email]);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className='my-10'>
            <h2 className="text-3xl font-bold text-center mb-2 text-primary">My Collection</h2>
            <p className='text-center text-gray-500 mb-8'>
                List of movies added by: <span className='font-bold text-secondary'>{user.email}</span>
            </p>

            {
                movies.length === 0 ? (
                    <div className='text-center py-20'>
                        <p className='text-2xl font-semibold mb-4'>You haven't added any movies yet!</p>

                    </div>
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

export default MyCollection;