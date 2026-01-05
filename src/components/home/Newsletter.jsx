import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Subscribed!',
            text: `Thank you for subscribing with ${email}.`,
            icon: 'success',
            confirmButtonText: 'Great'
        });
        setEmail('');
    };

    return (
        <section className="py-20 bg-primary/10" data-aos="zoom-in">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Stay Updated</h2>
                    <p className="text-base-content/70 mb-8 text-lg">
                        Get the latest movie news, trending lists, and exclusive offers delivered straight to your inbox.
                    </p>

                    <form onSubmit={handleSubscribe} className="join w-full max-w-md shadow-lg">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            className="input input-bordered join-item w-full focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary join-item px-8">Subscribe</button>
                    </form>
                    <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
