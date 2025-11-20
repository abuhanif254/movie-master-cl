import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext'; // সঠিক পাথ থেকে ইমপোর্ট

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Logged out successfully");
            })
            .catch(error => console.error(error));
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">All Movies</NavLink></li>
        <li><NavLink to="/add-movie">Add Movie</NavLink></li>
        <li><NavLink to="/my-collection">My Collection</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-bold text-primary">MovieMaster Pro</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            
            {/* Navbar End - Conditional Rendering */}
            <div className="navbar-end gap-2">
                {
                    user && user?.email ? (
                        <div className='flex items-center gap-2'>
                            {/* ইউজার এর ছবি এবং টুলটিপ */}
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img 
                                    className='w-10 h-10 rounded-full object-cover border border-base-300' 
                                    src={user.photoURL} 
                                    alt="User" 
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            {/* লগ আউট বাটন */}
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