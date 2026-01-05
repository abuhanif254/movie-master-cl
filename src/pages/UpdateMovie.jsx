import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateMovie = () => {
    const movie = useLoaderData();
    const navigate = useNavigate();

    const { _id, poster, title, genre, duration, releaseYear, rating, summary } = movie;

    const handleUpdateMovie = event => {
        event.preventDefault();
        const form = event.target;

        const updatedMovie = {
            poster: form.poster.value,
            title: form.title.value,
            genre: form.genre.value,
            duration: form.duration.value,
            releaseYear: form.releaseYear.value,
            rating: form.rating.value,
            summary: form.summary.value
        }


        fetch(`http://localhost:5000/movies/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Movie Updated Successfully!');
                    navigate(`/movies/${_id}`);
                } else {
                    toast.info('No changes made.');
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Error updating movie');
            })
    }

    return (
        <div className="p-4 max-w-3xl mx-auto bg-base-200 rounded-xl shadow-lg my-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Update Movie: {title}</h2>
            <form onSubmit={handleUpdateMovie}>

                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label"><span className="label-text font-semibold">Movie Poster URL</span></label>
                        <input type="text" name="poster" defaultValue={poster} className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label"><span className="label-text font-semibold">Movie Title</span></label>
                        <input type="text" name="title" defaultValue={title} className="input input-bordered w-full" required />
                    </div>
                </div>


                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label"><span className="label-text font-semibold">Genre</span></label>
                        <select name="genre" defaultValue={genre} className="select select-bordered w-full" required>
                            <option disabled value="">Select Genre</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Horror">Horror</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Thriller">Thriller</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label"><span className="label-text font-semibold">Duration (min)</span></label>
                        <input type="number" name="duration" defaultValue={duration} className="input input-bordered w-full" required />
                    </div>
                </div>


                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label"><span className="label-text font-semibold">Release Year</span></label>
                        <select name="releaseYear" defaultValue={releaseYear} className="select select-bordered w-full" required>
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
                    <div className="form-control md:w-1/2">
                        <label className="label"><span className="label-text font-semibold">Rating (0-10)</span></label>
                        <input type="number" step="0.1" name="rating" defaultValue={rating} className="input input-bordered w-full" max="10" min="0" required />
                    </div>
                </div>


                <div className="mb-4">
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Summary</span></label>
                        <textarea name="summary" defaultValue={summary} className="textarea textarea-bordered h-24" required></textarea>
                    </div>
                </div>

                <input type="submit" value="Update Movie" className="btn btn-primary w-full font-bold text-white" />
            </form>
        </div>
    );
};

export default UpdateMovie;