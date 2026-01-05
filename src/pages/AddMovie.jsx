import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthContext';
import { toast } from 'react-toastify';

const AddMovie = () => {
    const { user } = useContext(AuthContext);

    const handleAddMovie = event => {
        event.preventDefault();
        const form = event.target;

        const poster = form.poster.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const releaseYear = form.releaseYear.value;
        const rating = form.rating.value;
        const summary = form.summary.value;

        const newMovie = {
            poster,
            title,
            genre,
            duration,
            releaseYear,
            rating,
            summary,
            email: user.email
        }


        fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/movies`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Movie Added Successfully!');
                    form.reset();
                }
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200 py-10 px-4">
            <div className="card bg-base-100 w-full max-w-3xl shadow-2xl">
                <form onSubmit={handleAddMovie} className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-6 text-primary">Add a New Movie</h2>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Movie Poster URL</span>
                            </label>
                            <input type="text" name="poster" placeholder="https://example.com/image.jpg" className="input input-bordered w-full" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Movie Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Inception" className="input input-bordered w-full" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Genre</span>
                            </label>
                            <select name="genre" className="select select-bordered w-full" required defaultValue="">
                                <option disabled value="">Select Genre</option>
                                <option value="Action">Action</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Duration (min)</span>
                            </label>
                            <input type="number" name="duration" placeholder="120" className="input input-bordered w-full" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Release Year</span>
                            </label>
                            <select name="releaseYear" className="select select-bordered w-full" required defaultValue="">
                                <option disabled value="">Select Year</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                            </select>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Rating (0-10)</span>
                            </label>
                            <input type="number" step="0.1" name="rating" placeholder="8.5" className="input input-bordered w-full" max="10" min="0" required />
                        </div>
                    </div>


                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold">Summary</span>
                        </label>
                        <textarea name="summary" className="textarea textarea-bordered h-32 w-full" placeholder="Short summary of the movie..." required></textarea>
                    </div>


                    <div className="form-control mt-6">
                        <input type="submit" value="Add Movie" className="btn btn-primary w-full font-bold text-white text-lg" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;