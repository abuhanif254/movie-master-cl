import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Jenkins",
            role: "Film Critic",
            text: "MovieMaster Pro has completely changed how I organize my reviews. The interface is stunning and easy to use.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Michael Chen",
            role: "Movie Enthusiast",
            text: "Finally, a tracking app that actually looks good! I love the watchlist features and the pro statistics.",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Emily Davis",
            role: "Casual Viewer",
            text: "I used to lose track of what I wanted to watch. This app solves that problem perfectly. Highly recommended!",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    return (
        <section className="py-20 bg-base-200" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">User Testimonials</h2>
                    <p className="text-gray-500">See what our community has to say about us.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        className="pb-12"
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className="card bg-base-100 p-8 md:p-12 shadow-sm border border-base-200 text-center mx-4">
                                    <FaQuoteLeft className="text-4xl text-primary/20 mx-auto mb-6" />
                                    <p className="text-xl md:text-2xl font-light italic mb-8 max-w-2xl mx-auto">"{review.text}"</p>
                                    <div className="flex flex-col items-center">
                                        <div className="avatar mb-4">
                                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={review.avatar} alt={review.name} />
                                            </div>
                                        </div>
                                        <h4 className="font-bold text-lg">{review.name}</h4>
                                        <p className="text-sm text-base-content/60 uppercase tracking-widest">{review.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
