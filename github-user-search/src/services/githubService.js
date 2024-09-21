import axios from 'axios';

const fetchUserData = async (username) => {
    if (!username) throw new Error('Username is required.');

    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        // You can handle specific error cases here if needed
        throw new Error('Error fetching user data: ' + error.message);
    }
};

export default fetchUserData;