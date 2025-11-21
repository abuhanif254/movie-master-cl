import React, { useContext } from 'react';
import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';
import { FaStar, FaTrash, FaEdit, FaCalendarAlt, FaClock, FaGlobe, FaHeart } from "react-icons/fa"; // FaHeart আনা হলো
import { toast } from 'react-toastify';

const MovieDetails = () => {
    const movie = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { _id, poster, title, genre, duration, releaseYear, rating, summary, email } = movie;

    
    const handleDelete = () => {
        fetch(`http://localhost:5000/movies/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                toast.success("Movie Deleted Successfully!");
                navigate('/movies');
            }
        })
        .catch(error => {
            console.error(error);
            toast.error("Failed to delete movie");
        });
    }

    
    const handleAddToWatchlist = () => {
        if(!user || !user.email){
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

        fetch('http://localhost:5000/watchlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(watchListItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success("Added to Watchlist ❤️");
            }
        })
    }

    return (
        <div className="container mx-auto my-10 px-4">
            <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200">
                <figure className="lg:w-1/3 h-[500px]">
                    <img src={poster} alt={title} className="w-full h-full object-cover" />
                </figure>

                <div className="card-body lg:w-2/3">
                    <h2 className="text-4xl font-bold mb-2 text-primary">{title}</h2>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="badge badge-secondary badge-lg flex items-center gap-1">
                            <FaStar className='text-yellow-300'/> {rating}/10
                        </div>
                        <div className="badge badge-outline badge-lg">{genre}</div>
                    </div>

                    <p className="text-gray-500 text-lg mb-6">{summary}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <p className='flex items-center gap-2 text-lg'><FaCalendarAlt className='text-primary'/> <strong>Release Year:</strong> {releaseYear}</p>
                        <p className='flex items-center gap-2 text-lg'><FaClock className='text-primary'/> <strong>Duration:</strong> {duration} min</p>
                        <p className='flex items-center gap-2 text-lg'><FaGlobe className='text-primary'/> <strong>Added By:</strong> {email}</p>
                    </div>

                    
                    <div className="card-actions justify-end mt-auto items-center">
                        
                        
                        { user && (
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
                                        onClick={() => document.getElementById('delete_modal').showModal()} 
                                        className="btn btn-error text-white">
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
             
             <dialog id="delete_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure?</h3>
                    <p className="py-4">Do you really want to delete <span className='font-bold'>{title}</span>? This process cannot be undone.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn btn-neutral mr-2">Cancel</button>
                            <button onClick={handleDelete} className="btn btn-error text-white">Yes, Delete</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MovieDetails;