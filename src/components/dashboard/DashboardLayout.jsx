import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from '../Navbar'; // Assuming there is a shared Navbar, or we create a specific one
// If the user wants a specific dashboard navbar, we can make one.
// The user request said: "Dedicated dashboard layout with top navbar, profile dropdown... and sidebar."
// Using the existing Navbar might be fine if it has the profile dropdown, which it usually does in these projects.
// Let's create a minimal DashboardHeader to be safe and specific.

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}

                {/* Mobile logic for sidebar toggle would be in the Navbar or a specific toggle button */}
                <div className="w-full navbar bg-base-100 lg:hidden">
                    <div className="flex-none">
                        <label htmlFor="dashboard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-xl font-bold">MovieMaster Dashboard</div>
                </div>

                <div className="p-4 min-h-screen bg-base-100">
                    <Outlet />
                </div>
            </div>
            <Sidebar />
        </div>
    );
};

export default DashboardLayout;
