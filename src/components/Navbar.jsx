

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';
import ThemeToggle from './ThemeToggle';
import { FaFilm } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch(error => console.error(error));
    }


    const getLinkClass = ({ isActive }) => {
        return isActive
            ? "font-bold text-primary border-b-2 border-primary"
            : "font-bold hover:text-primary";
    };

    const links = <>
        <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
        <li><NavLink to="/movies" className={getLinkClass}>All Movies</NavLink></li>
        <li><NavLink to="/add-movie" className={getLinkClass}>Add Movie</NavLink></li>
        <li><NavLink to="/my-collection" className={getLinkClass}>My Collection</NavLink></li>
        <li><NavLink to="/watchlist" className={getLinkClass}>Watchlist</NavLink></li>
        {user && <li><NavLink to="/dashboard" className={getLinkClass}>Dashboard</NavLink></li>}
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 sticky top-0 z-50 font-poppins">
            <div className="navbar-start z-50">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {links}
                        {/* Mobile Auth Buttons */}
                        {!user && (
                            <div className="flex flex-col gap-2 mt-2">
                                <Link to="/login" className="btn btn-primary btn-sm w-full">Login</Link>
                                <Link to="/register" className="btn btn-outline btn-primary btn-sm w-full">Register</Link>
                            </div>
                        )}
                        {
                            user && (
                                <div className="mt-2 border-t pt-2">
                                    <li onClick={handleLogOut} className="btn btn-error btn-xs w-full text-white">Logout</li>
                                </div>
                            )
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl md:text-3xl font-bold text-primary gap-1 px-0 md:px-4">
                    <FaFilm />
                    <span className="hidden min-[370px]:inline">MovieMaster</span>
                    <span className="hidden sm:inline">Pro</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2">

                <ThemeToggle />

                {
                    user && user?.email ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-base-300">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User"
                                        src={user.photoURL || "https://example.com/placeholder.jpg"}
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/dashboard/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/my-collection">My Collection</Link></li>
                                <li><Link to="/watchlist">Watchlist</Link></li>
                                <div className="divider my-0"></div>
                                <li onClick={handleLogOut}><a className="text-error">Logout</a></li>
                            </ul>
                        </div>
                    ) : (
                        <div className="hidden lg:flex gap-2">
                            <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
                            <Link to="/register" className="btn btn-outline btn-primary btn-sm">Register</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;
