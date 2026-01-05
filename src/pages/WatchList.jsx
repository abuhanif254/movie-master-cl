import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

const WatchList = () => {
    const { user } = useContext(AuthContext);
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/watchlist?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                // .then(data => {
                    setWatchlist(data);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) return <LoadingSpinner />;

    return (
        <div className="overflow-x-auto my-10 container mx-auto px-4 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">My Watchlist</h2>

            {watchlist.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">Your watchlist is empty.</p>
            ) : (
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='bg-base-200 text-base'>
                            <th>Poster</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={item.poster} alt={item.title} />
                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold text-lg'>{item.title}</td>
                                <td><span className="badge badge-ghost badge-sm">{item.genre}</span></td>
                                <td className='font-bold text-orange-500'>{item.rating}</td>
                                <td>
                                    <button className="btn btn-xs btn-error text-white">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default WatchList;