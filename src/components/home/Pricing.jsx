import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Pricing = () => {
    return (
        <section className="py-20 bg-base-100" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
                    <p className="text-gray-500">Choose the plan that fits your movie lifestyle.</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <div className="card w-full md:w-1/2 bg-base-100 shadow-xl border border-base-200">
                        <div className="card-body">
                            <h3 className="text-2xl font-bold text-center">Free</h3>
                            <p className="text-center text-5xl font-extrabold my-4">$0<span className="text-lg font-normal text-gray-500">/mo</span></p>
                            <ul className="space-y-4 my-6">
                                <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> Unlimited Movie Tracking</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> Create Watchlists</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> Basic Stats</li>
                                <li className="flex items-center gap-2 opacity-50"><FaTimes className="text-red-400" /> Ad-free Experience</li>
                                <li className="flex items-center gap-2 opacity-50"><FaTimes className="text-red-400" /> Data Export</li>
                            </ul>
                            <div className="card-actions justify-center mt-auto">
                                <button className="btn btn-outline btn-block">Current Plan</button>
                            </div>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="card w-full md:w-1/2 bg-primary text-primary-content shadow-2xl scale-105 border-none relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-secondary text-white text-xs px-3 py-1 rounded-bl-lg font-bold">POPULAR</div>
                        <div className="card-body">
                            <h3 className="text-2xl font-bold text-center">Pro Member</h3>
                            <p className="text-center text-5xl font-extrabold my-4">$5<span className="text-lg font-normal opacity-80">/mo</span></p>
                            <ul className="space-y-4 my-6">
                                <li className="flex items-center gap-2"><FaCheck className="text-white" /> Everything in Free</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-white" /> Ad-free Experience</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-white" /> Advanced Analytics</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-white" /> CSV Data Export</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-white" /> Early Beta Access</li>
                            </ul>
                            <div className="card-actions justify-center mt-auto">
                                <button className="btn btn-secondary btn-block text-white border-none hover:bg-secondary-focus">Upgrade Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
