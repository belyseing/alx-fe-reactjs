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

    // Construct the API endpoint
    const url = `https://api.github.com/search/users?${query}`;

    try {
        const response = await axios.get(url); // Use the search endpoint here
        return response.data.items; // Return the items (array of users)
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error("Looks like we cant find the user");
        }
        throw new Error('Error fetching user data: ' + error.message);
    }
};

export default fetchUserData;