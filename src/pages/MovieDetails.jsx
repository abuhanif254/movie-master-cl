import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';
import { FaStar, FaTrash, FaEdit, FaCalendarAlt, FaClock, FaGlobe, FaHeart, FaUserCircle } from "react-icons/fa";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import MovieCard from '../components/MovieCard';

const MovieDetails = () => {
    const movie = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [relatedMovies, setRelatedMovies] = useState([]);

    const { _id, poster, title, genre, duration, releaseYear, rating, summary, email } = movie;

    // Fetch related movies
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/movies`)
            .then(res => res.json())
            .then(data => {
                const related = data.filter(m => m.genre === genre && m._id !== _id).slice(0, 4);
                setRelatedMovies(related);
            })
            .catch(err => console.error("Error fetching related movies:", err));
    }, [genre, _id]);

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/movies/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your movie has been deleted.',
                                'success'
                            );
                            navigate('/movies');
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire(
                            'Error!',
                            'Failed to delete movie.',
                            'error'
                        );
                    });
            }
        })
    }


    const handleAddToWatchlist = () => {
        if (!user || !user.email) {
            toast.error("Please login to add to watchlist");
            return;
        }

        const watchListItem = {
            movieId: _id,
            title,
            poster,
            genre,
            rating,
            userEmail: user.email
        }

        fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/watchlist`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(watchListItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added to Watchlist ❤️',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="container mx-auto my-10 px-4">
            {/* Top Section: Details */}
            <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 mb-12">
                <figure className="lg:w-1/3 h-[500px]">
                    <img src={poster} alt={title} className="w-full h-full object-cover" />
                </figure>

                <div className="card-body lg:w-2/3">
                    <h2 className="text-4xl font-bold mb-2 text-primary">{title}</h2>

                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="badge badge-secondary badge-lg flex items-center gap-1">
                            <FaStar className='text-yellow-300' /> {rating}/10
                        </div>
                        <div className="badge badge-outline badge-lg">{genre}</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-base-200 p-4 rounded-lg">
                        <p className='flex items-center gap-2 text-lg'><FaCalendarAlt className='text-primary' /> <strong>Release Year:</strong> {releaseYear}</p>
                        <p className='flex items-center gap-2 text-lg'><FaClock className='text-primary' /> <strong>Duration:</strong> {duration} min</p>
                        <p className='flex items-center gap-2 text-lg'><FaGlobe className='text-primary' /> <strong>Added By:</strong> {email}</p>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2">Overview</h3>
                    <p className="text-gray-500 text-lg mb-6 leading-relaxed">{summary}</p>

                    <div className="card-actions justify-end mt-auto items-center">
                        {user && (
                            <button onClick={handleAddToWatchlist} className="btn btn-outline btn-secondary">
                                <FaHeart /> Add to Watchlist
                            </button>
                        )}

                        {
                            user && user.email === email && (
                                <div className='flex gap-3 ml-2'>
                                    <Link to={`/movies/update/${_id}`} className="btn btn-primary text-white">
                                        <FaEdit /> Update
                                    </Link>
                                    <button
                                        onClick={handleDelete}
                                        className="btn btn-error text-white">
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6 border-b pb-2">Reviews & Ratings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dummy Reviews */}
                    <div className="card bg-base-100 shadow-sm border border-base-200 p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <FaUserCircle className="text-3xl text-gray-400" />
                            <div>
                                <h4 className="font-bold">John Doe</h4>
                                <div className="flex text-yellow-400 text-sm">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">"This movie was absolutely fantastic! The visuals were stunning and the story kept me hooked."</p>
                    </div>
                    <div className="card bg-base-100 shadow-sm border border-base-200 p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <FaUserCircle className="text-3xl text-gray-400" />
                            <div>
                                <h4 className="font-bold">Jane Smith</h4>
                                <div className="flex text-yellow-400 text-sm">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">"Great acting, but the pacing was a bit slow in the middle. Still worth a watch."</p>
                    </div>
                </div>
            </div>

            {/* Related Movies Section */}
            {relatedMovies.length > 0 && (
                <div>
                    <h3 className="text-3xl font-bold mb-6 border-b pb-2">Related Movies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedMovies.map(movie => (
                            <MovieCard key={movie._id} movie={movie} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
