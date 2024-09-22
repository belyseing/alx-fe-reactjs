import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState(''); // Store input username
    const [userData, setUserData] = useState(null); // Store fetched user data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error message

    // Handle input change
    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form behavior
        setLoading(true); // Set loading to true
        setError(null); // Reset error message
        setUserData(null); // Reset user data

        try {
            const data = await fetchUserData(username); // Fetch user data
            setUserData(data); // Set user data on successful fetch
        } catch (err) {
            setError(err.message); // Set error message on failure
        } finally {
            setLoading(false); // Set loading to false regardless of success/failure
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
            {loading && <p>Loading...</p>} {/* Show loading message */}
            {error && <p className='text-red-500'>{error}</p>} {/* Show error message */}

            {userData && ( // If userData exists, display user info
                <div>
                    <h2 className="text-xl font-bold">{userData.login}</h2> {/* User's name */}
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" /> {/* User's avatar */}
                    <p>
                        <a 
                            href={userData.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 underline"
                        >
                            View Profile
                        </a> {/* Link to GitHub profile */}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;