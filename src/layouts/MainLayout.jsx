import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className='font-poppins'>
            <ToastContainer position="top-center" />
            <Navbar />
            <div className='min-h-[calc(100vh-288px)] container mx-auto px-2 py-6'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;