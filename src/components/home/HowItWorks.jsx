import React from 'react';
import { FaSearch, FaListUl, FaStar } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaSearch className="text-4xl text-primary" />,
            title: "Discover Movies",
            description: "Browse through our extensive collection of movies from various genres and eras."
        },
        {
            icon: <FaListUl className="text-4xl text-secondary" />,
            title: "Create Lists",
            description: "Curate your personal watchlist and collection. Keep track of what you want to see."
        },
        {
            icon: <FaStar className="text-4xl text-accent" />,
            title: "Rate & Review",
            description: "Share your thoughts with the community. Rate movies and help others decide."
        }
    ];

    return (
        <section className="py-20 bg-base-100" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-gray-500">Get started with MovieMaster Pro in three simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300">
                            <div className="card-body items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-base-100 flex items-center justify-center mb-6 shadow-sm">
                                    {step.icon}
                                </div>
                                <h3 className="card-title text-2xl mb-2">{step.title}</h3>
                                <p className="text-base-content/70">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
