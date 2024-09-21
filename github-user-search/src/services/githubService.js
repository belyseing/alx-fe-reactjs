import axios from 'axios';

const fetchUserData = async (username) => {
    if (!username) throw new Error('Username is required.');

    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error("Looks like we can't find the user");
        }
        throw new Error('Error fetching user data: ' + error.message);
    }
};

export default fetchUserData;