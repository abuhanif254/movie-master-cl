import React from 'react';

const Categories = ({ onSelectGenre, selectedGenre }) => {
    const genres = [
        "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller",
        "Romance", "Adventure", "Animation", "Crime"
    ];

    return (
        <section className="py-16 container mx-auto px-4" id="genre-section" data-aos="fade-up">
            <h2 className='text-3xl font-bold text-center mb-2 border-l-4 border-accent pl-4 inline-block'>
                Browse by Genre
            </h2>
            <p className='text-center text-gray-500 mb-8'>Click on a genre to filter movies instantly</p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {
                    genres.map((genre, idx) => (
                        <button
                            key={idx}
                            onClick={() => onSelectGenre(genre)}
                            className={`btn btn-outline px-8 rounded-full transition-all duration-300 hover:scale-105 ${selectedGenre === genre ? 'btn-active btn-primary text-white' : ''}`}
                        >
                            {genre}
                        </button>
                    ))
                }
            </div>
        </section>
    );
};

export default Categories;
