import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState(''); // New state for location
    const [minRepos, setMinRepos] = useState(''); // New state for repo count
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            const data = await fetchUserData(username, location, minRepos);
            // Check if data is empty or does not have a login
            if (!data || !data.login) {
                throw new Error("Looks like we cant find the user");
            }
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

            {/* Conditional Rendering */}
            {loading && <p>Loading...</p>}
        {error && <p className='text-red-500'>{error}</p>} {/* Displays error message */}

        {/* Display user data */}
        {Array.isArray(userData) && userData.length > 0 && (
            <div>
                {userData.map((user) => (
                    <div key={user.id} className="border p-4 mb-2 rounded">
                        <h2 className="text-xl font-bold">{user.login}</h2> {/* Access login here */}
                        <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
                        <p>
                            <a 
                                href={user.html_url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 underline"
                            >
                                View Profile
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        )}

        {/* If no userData and no error, display the message */}
        {!userData && !loading && !error && <p>Looks like we can't find the user</p>}
    </div>
);
};

export default Search;