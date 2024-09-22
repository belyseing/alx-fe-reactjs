import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='max-w-md mx-auto p-4'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={handleInputChange} 
                    placeholder="Enter GitHub username" 
                    className='border p-2 w-full rounded'
                />
                <button type="submit" className='bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600'>
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}

            {userData ? (
                <div>
                    <h2 className="text-xl font-bold">{userData.login}</h2>
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
                    <p>
                        <a 
                            href={userData.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 underline"
                        >
                            View Profile
                        </a>
                    </p>
                </div>
            ) : (
                !loading && !error && <p>Looks like we can't find the user.</p>
            )}
        </div>
    );
};

export default Search;