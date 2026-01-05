import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { SkeletonLoader } from '../components/LoadingSpinner';
import { useSearchParams } from 'react-router-dom';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [genre, setGenre] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    // Genres list - could be dynamic in a real app
    const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Adventure", "Fantasy", "Animation"];

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/movies`)
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setFilteredMovies(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching movies:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let result = [...movies];

        // Search
        if (searchTerm) {
            result = result.filter(movie =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by Genre
        if (genre) {
            result = result.filter(movie =>
                movie.genre.toLowerCase() === genre.toLowerCase()
                // match loose typing if needed, or exact
            );
        }

        // Sort
        if (sortBy === 'rating_desc') {
            result.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'year_desc') {
            result.sort((a, b) => b.releaseYear - a.releaseYear);
        } else if (sortBy === 'title_asc') {
            result.sort((a, b) => a.title.localeCompare(b.title));
        }

        setFilteredMovies(result);
    }, [searchTerm, genre, sortBy, movies]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='container mx-auto px-4 my-10 min-h-screen'>
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">Explore Movies</h2>

            {/* Controls Section */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 bg-base-200 p-6 rounded-xl shadow-lg">

                {/* Search */}
                <label className="input input-bordered flex items-center gap-2 w-full md:w-1/3">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 w-full md:w-auto">
                    <select
                        className="select select-bordered w-full sm:w-auto"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option value="">All Genres</option>
                        {genres.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>

                    <select
                        className="select select-bordered w-full sm:w-auto"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="rating_desc">Top Rated</option>
                        <option value="year_desc">Newest First</option>
                        <option value="title_asc">Title (A-Z)</option>
                    </select>
                </div>
            </div>

            {/* Content */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="card bg-base-100 shadow-xl h-96">
                            <SkeletonLoader height={250} />
                            <div className="card-body">
                                <SkeletonLoader count={2} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {filteredMovies.length === 0 ? (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-semibold opacity-70">No movies found matching your criteria.</h3>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredMovies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AllMovies;