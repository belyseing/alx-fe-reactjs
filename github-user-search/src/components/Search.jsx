import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

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
        setUserData(null); // Reset userData to an empty array

        try {
            const data = await fetchUserData(username, location, minRepos);
            if (!data || (Array.isArray(data) && data.length === 0) || (!Array.isArray(data) && !data.login)) {
                throw new Error("Looks like we can't find the user");
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
            <form onSubmit={handleSubmit} className='space-y-4'>  
                <input 
                    type="text" 
                    value={username} 
                    onChange={handleInputChange} 
                    placeholder="Enter GitHub username" 
                    className='border p-2 w-full rounded'
                />
                <input 
                    type="text" 
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
                 
                <button type="submit" className='bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600'>
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}

            {userData ? (
                Array.isArray(userData) ? (
                    userData.length > 0 ? (
                        userData.map(user => (
                            <div key={user.id}>
                                <h2 className="text-xl font-bold">{user.login}</h2>
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
                        ))
                    ) : (
                        <div>Looks like we can't find the user.</div>
                    )
                ) : (
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
                )
            ) : (
                !loading && !error && <div>Looks like we can't find the user.</div>
            )}
        </div>
    );
};

export default Search;