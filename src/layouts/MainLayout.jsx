import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='font-poppins'>
            <Navbar />
            <div className='min-h-[calc(100vh-288px)] container mx-auto px-2 py-6'>
                {/* Navbar এবং Footer বাদে মাঝের অংশ ডায়নামিক হবে */}
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;