import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        // লোকাল স্টোরেজ এবং ডকুমেন্ট অ্যাট্রিবিউট সিঙ্ক করা থিম পরিবর্তনের সাথে
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <label className="swap swap-rotate btn btn-ghost btn-circle">
            {/* this hidden checkbox controls the state */}
            <input 
                type="checkbox" 
                onChange={handleToggle} 
                checked={theme === 'dark'} 
            />

            {/* sun icon */}
            <FaSun className="swap-on fill-current w-6 h-6 text-yellow-500" />

            {/* moon icon */}
            <FaMoon className="swap-off fill-current w-6 h-6 text-blue-500" />
        </label>
    );
};

export default ThemeToggle;