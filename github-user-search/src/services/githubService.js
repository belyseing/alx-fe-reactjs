import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

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

        // Check if any users were found
        if (response.data.total_count === 0) {
            throw new Error("Looks like we can't find the user");
        }

        // Return items from response
        return response.data.items || [];
    } catch (error) {
        throw new Error('Error fetching user data: ' + error.message);
    }
};

export default fetchUserData;