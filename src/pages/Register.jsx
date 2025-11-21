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

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        toast.success("Registration Successful!");
                        navigate('/'); 
                    })
                    .catch((err) => {
                        toast.error(err.message);
                    });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => { 
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
                    <h2 className='text-3xl font-bold text-center mb-6 text-primary'>Register Account</h2>
                    
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter your name" 
                            className="input input-bordered w-full" 
                            required 
                        />
                    </div>

                   
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input 
                            type="text" 
                            name="photo" 
                            placeholder="Enter photo URL" 
                            className="input input-bordered w-full" 
                            required 
                        />
                    </div>

                    
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            className="input input-bordered w-full" 
                            required 
                        />
                    </div>

                    
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Create a password" 
                            className="input input-bordered w-full" 
                            required 
                        />
                    </div>

                    
                    {
                        error.password && (
                            <label className="label text-sm text-red-500 mt-2">
                                {error.password}
                            </label>
                        )
                    }

                    <div className="form-control mt-6">
                        <button className="btn btn-primary font-bold text-white text-lg">Register</button>
                    </div>
                </form>

                
                <div className='px-8 pb-8'>
                    <div className="divider text-gray-500">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full mb-4 flex items-center gap-2'>
                        <FaGoogle className='text-red-500' /> Continue with Google
                    </button>
                    <p className='text-center text-sm'>
                        Already have an account? <Link className='text-primary font-bold link link-hover' to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;