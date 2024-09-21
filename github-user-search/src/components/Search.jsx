import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState(''); // New state for location
    const [minRepos, setMinRepos] = useState(''); // New state for minimum repositorie
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleMinReposChange = (e) => {
        setMinRepos(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null); // Reset userData on new search    

        try {
            const data = await fetchUserData(username,location, minRepos);
            if (!data || (Array.isArray(data) && data.length === 0) || (!Array.isArray(data) && !data.login)) { // Check if data is valid and contains login
                throw new Error("Looks like we cant find the user");
            }
    
            setUserData(data);

        } catch (err) {
            console.error(err); // Log the original error
            setError(err.message); // Set the error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='max-w-md mx-auto p-4'>
            <form onSubmit={handleSubmit} className='space-y-4'>  
                <input 
                    type="text" 
                    value={username} 
                    onChange={handleInputChange} 
                    placeholder="Enter GitHub username" 
                    className='border p-2 w-full rounded'
                />
                <input type="text" 
                value={location} 
                onChange={handleLocationChange} 
                placeholder="Location" 
                className='border p-2 w-full rounded'
                />
                <input 
                type="number" 
                value={minRepos} 
                onChange={handleMinReposChange} 
                placeholder="Minimum Repositories" 
                className="border p-2 w-full rounded"
                
                />
                 
                <button type="submit" 
                 className='bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600'
                >Search</button>
            </form>

            {loading && <p>Loading...</p>}
        {error && <p className='text-red-500'>{error}</p>}
        {userData ? (
            <div>
                <h2 className='text-xl font-bold'>{userData.name}</h2>
                <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width="100" />
                <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer"
                 className='text-blue-500 underline'
                >View Profile</a></p>
            </div>
        ) : (
            !loading && !error && <div>Looks like we can't find the user</div>
        )}
    </div>
);
};

export default Search;