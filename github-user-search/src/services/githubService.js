import axios from 'axios';

const fetchUserData = async (username, location = '', minRepos = 0) => {
    if (!username) throw new Error('Username is required.');

    // Construct the query string
    let query = `q=${username}`;
    
    // Add location to the query if provided
    if (location) {
        query += `+location:${location}`;
    }

    // Add minimum repositories to the query if provided
    if (minRepos > 0) {
        query += `+repos:>${minRepos}`;
    }

    // Construct the API endpoint for searching users
    const url = `https://api.github.com/search/users?${query}`;
    console.log('Fetching data from:', url); // Debugging line

    try {
        // Make the API call to the search endpoint
        const response = await axios.get(url);
        
        // Return items from response, default to empty array if none found
        return response.data.items || [];
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error("Looks like we can't find the user");
        }
        throw new Error('Error fetching user data: ' + error.message);
    }
};

export default fetchUserData;