import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaChartPie, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="drawer-side z-40">
            <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col">
                {/* Sidebar content here */}
                <div className="mb-6 px-4">
                    <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
                </div>

                <li>
                    <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "active" : ""}>
                        <FaChartPie /> Overview
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "active" : ""}>
                        <FaUser /> Profile
                    </NavLink>
                </li>

                <div className="divider"></div>

                <li>
                    <NavLink to="/">
                        <FaHome /> Home
                    </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
