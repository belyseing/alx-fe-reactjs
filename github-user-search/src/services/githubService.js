import axios from 'axios';



const fetchUserData = async (username , location, minRepos) => {
    if (!username) throw new Error('Username is required.');

    const baseURL = 'https://api.github.com/search/users?q=';
     // Start building the query string
     let query = '';

     // Add the username to the query if it's provided
     if (username) {
         query += `${username}`;
     }
 
     // Add location filter to the query if it's provided
     if (location) {
         query += `+location:${location}`;
     }
 
     // Add min repositories filter if it's provided
     if (minRepos) {
         query += `+repos:>${minRepos}`;
     }
 
     // Construct the full API URL
     const url = `${baseURL}${query}`;
 
    
    try {
        const response = await axios.get(url);
        return response.data; // Return user data directly
    } catch (error) {
        if (error.response && error.response.status === 404) {
            // Handle 404 specifically
            throw new Error("Looks like we can't find the user");
        }
        // Handle other errors
        throw new Error('Error fetching user data: ' + error.message);
    }
};

export default fetchUserData;