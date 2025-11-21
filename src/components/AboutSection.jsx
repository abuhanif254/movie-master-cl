import React from 'react';

const AboutSection = () => {
    return (
        <div className="hero min-h-[500px] bg-base-200 rounded-xl my-16" data-aos="fade-up">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop"
                    className="w-full lg:w-1/2 rounded-lg shadow-2xl"
                    alt="Movie Platform"
                    data-aos="zoom-in"
                />
                <div className="lg:w-1/2 lg:pl-10">
                    <h1 className="text-4xl font-bold text-primary mb-4">
                        Welcome to MovieMaster Pro
                    </h1>
                    <p className="py-6 text-lg text-gray-600 text-justify">
                        MovieMaster Pro is your ultimate destination for organizing and discovering movies. 
                        Whether you are a casual viewer or a hardcore cinephile, our platform offers 
                        tools to track your watched list, discover new genres, and manage your personal collection effortlessly.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="100">
                            <span className="w-3 h-3 bg-secondary rounded-full"></span>
                            <span className="font-semibold">Advanced Filtering</span>
                        </div>
                        <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="200">
                            <span className="w-3 h-3 bg-secondary rounded-full"></span>
                            <span className="font-semibold">Real-time Search</span>
                        </div>
                        <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="300">
                            <span className="w-3 h-3 bg-secondary rounded-full"></span>
                            <span className="font-semibold">Personal Collections</span>
                        </div>
                        <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="400">
                            <span className="w-3 h-3 bg-secondary rounded-full"></span>
                            <span className="font-semibold">Secure Authentication</span>
                        </div>
                    </div>
                    
                    <button className="btn btn-primary mt-8">Learn More About Us</button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;