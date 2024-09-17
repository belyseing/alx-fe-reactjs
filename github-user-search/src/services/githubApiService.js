import axios from "axios";

const API_URL = "https://github.com/belyseing";

const getUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export default getUserData;
