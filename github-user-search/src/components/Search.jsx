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
        setUserData(null); // Reset userData on new search    

        try {
            const data = await fetchUserData(username);
            if (!data || !data.login) { // Check if data is valid and contains login
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
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={handleInputChange} 
                    placeholder="Enter GitHub username" 
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData ? (
            <div>
                <h2>{userData.name}</h2>
                <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width="100" />
                <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
            </div>
        ) : (
            !loading && !error && <div>Looks like we can't find the user</div>
        )}
    </div>
);
};

export default Search;