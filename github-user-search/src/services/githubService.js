import axios from 'axios';

const fetchUserData = async (username) => {
    if (!username) throw new Error('Username is required.');

    const url = `https://api.github.com/users/${username}`;
    
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