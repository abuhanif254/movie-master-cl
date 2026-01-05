import React, { useEffect, useState } from 'react';
import StatCard from '../../components/dashboard/StatCard';
import { MoviesPerGenreChart, MoviesPerYearChart } from '../../components/dashboard/Charts';
import { FaVideo, FaUsers, FaChartLine } from 'react-icons/fa';
import { SkeletonLoader } from '../../components/LoadingSpinner';

const DashboardHome = () => {
    const [stats, setStats] = useState({ movieCount: 0, userCount: 0 });
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [statsRes, moviesRes] = await Promise.all([
                    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/stats`),
                    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/movies`)
                ]);
                const statsData = await statsRes.json();
                const moviesData = await moviesRes.json();

                setStats(statsData);
                setMovies(moviesData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Process data for charts
    const genreData = movies.reduce((acc, movie) => {
        const genre = movie.genre || 'Unknown';
        const existing = acc.find(item => item.name === genre);
        if (existing) {
            existing.value++;
        } else {
            acc.push({ name: genre, value: 1 });
        }
        return acc;
    }, []);

    const yearData = movies.reduce((acc, movie) => {
        const year = movie.releaseYear || 'Unknown';
        const existing = acc.find(item => item.name === year);
        if (existing) {
            existing.value++;
        } else {
            acc.push({ name: year, value: 1 });
        }
        return acc;
    }, []);


    if (loading) {
        return <div className="p-6"><SkeletonLoader count={5} height={50} /></div>;
    }

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                    title="Total Movies"
                    value={stats.movieCount || movies.length}
                    icon={<FaVideo />}
                    color="border-primary"
                />
                <StatCard
                    title="Total Users"
                    value={stats.userCount || 'N/A'}
                    icon={<FaUsers />}
                    color="border-secondary"
                />
                <StatCard
                    title="Total Genres"
                    value={genreData.length}
                    icon={<FaChartLine />}
                    color="border-accent"
                />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-base-100 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Movies by Genre</h3>
                    <MoviesPerGenreChart data={genreData} />
                </div>
                <div className="bg-base-100 p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Movies by Release Year</h3>
                    <MoviesPerYearChart data={yearData} />
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-base-100 rounded-xl shadow-lg p-6 overflow-x-auto">
                <h3 className="text-xl font-bold mb-4">Recent Movies</h3>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th>Added By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.slice(0, 5).map(movie => (
                            <tr key={movie._id}>
                                <td className="font-bold">{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.releaseYear}</td>
                                <td><div className="badge badge-ghost">{movie.rating}</div></td>
                                <td>{movie.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardHome;
