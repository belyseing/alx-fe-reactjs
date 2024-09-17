import React, { useState } from "react";
import getUserData from "../../services/githubApiService";
import SearchResults from "../SearchResults/SearchResults";

function UserSearch() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getUserData(username);
      setUserData([data]); // Assuming you get an array of user objects
      setError(null);
    } catch (err) {
      setError("User not found or error occurred");
      setUserData([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}
      <SearchResults results={userData} />
    </div>
  );
}

export default UserSearch;
