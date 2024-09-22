import axios from 'axios';

const fetchUserData = async (username) => {
    if (!username) throw new Error('Username is required.');

    const url = `https://api.github.com/users/${username}`;
    const response = await axios.get(url);
    return response.data; // Return user data
};

export default fetchUserData;