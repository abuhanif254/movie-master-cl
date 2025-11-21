

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
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-3xl font-bold text-primary"> <FaFilm /> MovieMaster Pro</Link>
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
                        <div className='flex items-center gap-2'>
                            
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img 
                                    className='w-10 h-10 rounded-full object-cover border border-base-300' 
                                    src={user.photoURL} 
                                    alt="User" 
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                           
                            <button onClick={handleLogOut} className="btn btn-neutral btn-sm">Log Out</button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
                            <Link to="/register" className="btn btn-outline btn-primary btn-sm">Register</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;