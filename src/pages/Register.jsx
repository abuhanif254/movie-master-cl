import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../providers/AuthContext';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // 1. Password Validation
        if (password.length < 6) {
            setError({ ...error, password: "Password must be at least 6 characters long" });
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError({ ...error, password: "Password must contain at least one lowercase letter" });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError({ ...error, password: "Password must contain at least one uppercase letter" });
            return;
        }

        // 2. Create User
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                
                // 3. Update Profile
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        toast.success("Registration Successful!");
                        navigate('/'); // হোম পেজে রিডাইরেক্ট
                    })
                    .catch((err) => {
                        toast.error(err.message);
                    });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    // const handleGoogleLogin = () => {
    //     googleLogin()
    //     .then((result) => {
    //         toast.success("Google Login Successful!");
    //         navigate('/');
    //     })
    //     .catch(error => {
    //         toast.error(error.message);
    //     })
    // }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => { // 'result' সরিয়ে দেওয়া হয়েছে
            toast.success("Google Login Successful!");
            navigate('/');
        })
        .catch(error => {
            toast.error(error.message);
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200 py-10">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h2 className='text-2xl font-bold text-center mb-4'>Register Account</h2>
                    
                    {/* Name Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    {/* Photo URL Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>

                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    {/* Password Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>

                    {/* Error Message Display */}
                    {
                        error.password && (
                            <label className="label text-xs text-red-500">
                                {error.password}
                            </label>
                        )
                    }

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                {/* Google Login & Redirect */}
                <div className='px-8 pb-8'>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full mb-4'>
                        <FaGoogle /> Continue with Google
                    </button>
                    <p className='text-center'>Already have an account? <Link className='text-red-500 font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;