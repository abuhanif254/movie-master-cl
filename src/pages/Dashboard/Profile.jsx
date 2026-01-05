import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthContext';
import { toast } from 'react-toastify';
import { FaUser, FaCamera } from 'react-icons/fa';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [loading, setLoading] = useState(false);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setLoading(true);

        updateUserProfile({ displayName: name, photoURL: photoURL })
            .then(() => {
                toast.success("Profile Updated Successfully!");
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                toast.error("Failed to update profile.");
                setLoading(false);
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Profile</h2>

            <div className="card bg-base-100 shadow-xl overflow-hidden">
                <div className="bg-primary h-32 w-full"></div>
                <div className="px-6 pb-6">
                    <div className="relative -mt-16 mb-4 flex justify-center">
                        <div className="avatar online">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="Profile" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold">{user?.displayName}</h3>
                        <p className="text-gray-500">{user?.email}</p>
                    </div>

                    <form onSubmit={handleUpdateProfile} className="space-y-4 max-w-lg mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Display Name</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaUser className="opacity-70" />
                                <input
                                    type="text"
                                    className="grow"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <FaCamera className="opacity-70" />
                                <input
                                    type="text"
                                    className="grow"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className={`btn btn-primary ${loading ? 'loading' : ''}`} disabled={loading}>
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
