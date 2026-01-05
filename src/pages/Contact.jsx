import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        Swal.fire({
            title: "Message Sent!",
            text: "We will get back to you soon.",
            icon: "success"
        });
        e.target.reset();
    };

    return (
        <div className="container mx-auto px-6 py-12 md:py-20 font-poppins">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-base-content">

                {/* Contact Info */}
                <div className="space-y-8 animate-fade-in-left">
                    <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                    <p className="text-lg opacity-80">
                        Have questions or feedback? We'd love to hear from you. Fill out the form or reach us via email or phone.
                    </p>

                    <div className="flex items-center gap-4 text-xl">
                        <div className="bg-primary/20 p-4 rounded-full text-primary">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h4 className="font-bold">Address</h4>
                            <p className="opacity-80">123 Cinema Street, Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-xl">
                        <div className="bg-primary/20 p-4 rounded-full text-primary">
                            <FaPhone />
                        </div>
                        <div>
                            <h4 className="font-bold">Phone</h4>
                            <p className="opacity-80">+880 1234 567 890</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-xl">
                        <div className="bg-primary/20 p-4 rounded-full text-primary">
                            <FaEnvelope />
                        </div>
                        <div>
                            <h4 className="font-bold">Email</h4>
                            <p className="opacity-80">support@moviemaster.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-base-200 p-8 rounded-xl shadow-lg animate-fade-in-right">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full focus:input-primary" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full focus:input-primary" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Message</span></label>
                            <textarea placeholder="Write your message here..." className="textarea textarea-bordered w-full h-32 focus:textarea-primary" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full text-lg">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
