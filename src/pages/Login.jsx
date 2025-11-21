import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { userLogin, googleLogin, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Login Successful!"); 
                navigate(location?.state ? location.state : "/"); 
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                toast.error("Invalid email or password");
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Google Login Successful!");
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                toast.error(err.message);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200 py-10">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className='text-3xl font-bold text-center mb-6 text-primary'>Login</h2>
                    
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
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
                            placeholder="Enter your password" 
                            className="input input-bordered w-full" 
                            required 
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-gray-500">Forgot password?</a>
                        </label>
                    </div>

                    
                    {
                        error.login && (
                            <label className="label text-sm text-red-600">
                                {error.login}
                            </label>
                        )
                    }

                    
                    <div className="form-control mt-6">
                        <button className="btn btn-primary font-bold text-white text-lg">Login</button>
                    </div>
                </form>

               
                <div className='px-8 pb-8'>
                    <div className="divider text-gray-500">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full mb-4 flex items-center gap-2'>
                        <FaGoogle className='text-red-500' /> Continue with Google
                    </button>
                    <p className='text-center text-sm'>
                        Don't have an account? <Link className='text-primary font-bold link link-hover' to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;