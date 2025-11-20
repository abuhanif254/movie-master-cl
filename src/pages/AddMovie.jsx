import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'; // বা টোস্ট ব্যবহার করতে পারেন, আমরা টোস্টই ব্যবহার করব

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
            email: user.email // লগইন করা ইউজারের ইমেইল
        }

        // সার্ভারে ডাটা পাঠানো
        fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Movie Added Successfully!');
                form.reset();
            }
        })
    }

    return (
        <div className="p-4 max-w-3xl mx-auto bg-base-200 rounded-xl shadow-lg my-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Add a New Movie</h2>
            <form onSubmit={handleAddMovie}>
                {/* Row 1: Poster & Title */}
                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Movie Poster URL</span>
                        </label>
                        <input type="text" name="poster" placeholder="https://example.com/image.jpg" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Movie Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Inception" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Row 2: Genre & Duration */}
                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
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
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Duration (min)</span>
                        </label>
                        <input type="number" name="duration" placeholder="120" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Row 3: Release Year & Rating */}
                <div className="md:flex gap-4 mb-4">
                    <div className="form-control md:w-1/2">
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
                            {/* আরও বছর অ্যাড করতে পারেন */}
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold">Rating (0-10)</span>
                        </label>
                        <input type="number" step="0.1" name="rating" placeholder="8.5" className="input input-bordered w-full" max="10" min="0" required />
                    </div>
                </div>

                {/* Row 4: Summary */}
                <div className="mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Summary</span>
                        </label>
                        <textarea name="summary" className="textarea textarea-bordered h-24" placeholder="Short summary of the movie..." required></textarea>
                    </div>
                </div>

                <input type="submit" value="Add Movie" className="btn btn-primary w-full font-bold text-white" />
            </form>
        </div>
    );
};

export default AddMovie;