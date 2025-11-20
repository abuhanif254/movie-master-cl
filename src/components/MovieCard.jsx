import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaCalendarAlt, FaClock } from "react-icons/fa";

const MovieCard = ({ movie }) => {
    const { _id, poster, title, genre, duration, releaseYear, rating } = movie;

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200">
            <figure className="h-64 w-full overflow-hidden">
                <img 
                    src={poster} 
                    alt={title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/300x450?text=No+Image" }} // যদি ইমেজ লোড না হয়
                />
            </figure>
            <div className="card-body p-5">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-lg font-bold truncate" title={title}>
                        {title}
                    </h2>
                    <div className="badge badge-secondary font-bold flex items-center gap-1">
                        <FaStar className="text-yellow-300" /> {rating}
                    </div>
                </div>

                <div className="text-sm text-gray-500 mt-2 space-y-1">
                    <p className='flex items-center gap-2'><span className='font-semibold'>Genre:</span> {genre}</p>
                    <div className="flex justify-between items-center">
                        <p className="flex items-center gap-1"><FaCalendarAlt /> {releaseYear}</p>
                        <p className="flex items-center gap-1"><FaClock /> {duration} min</p>
                    </div>
                </div>

                <div className="card-actions justify-end mt-4">
                    <Link to={`/movies/${_id}`} className="btn btn-primary btn-sm w-full">
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;