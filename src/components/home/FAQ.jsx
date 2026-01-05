import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "Is MovieMaster Pro free to use?",
            answer: "Yes, you can create an account and track movies for free. We also offer a Pro plan for advanced features."
        },
        {
            question: "Can I watch movies directly on this site?",
            answer: "No, MovieMaster Pro is a movie tracking and discovery platform. We provide links to where you can stream them."
        },
        {
            question: "How do I add movies to my collection?",
            answer: "Simply search for a movie or browse our catalog, then click the 'Add to Collection' button on the movie details page."
        },
        {
            question: "Can I export my data?",
            answer: "Pro members can export their entire watchlist and collection history as a CSV file."
        }
    ];

    return (
        <section className="py-20 bg-base-100" data-aos="fade-up">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500">Got questions? We've got answers.</p>
                </div>

                <div className="join join-vertical w-full bg-base-200 border border-base-300 rounded-xl">
                    {faqs.map((faq, index) => (
                        <div key={index} className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
                            <div className="collapse-title text-xl font-medium">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p className="text-base-content/80">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
