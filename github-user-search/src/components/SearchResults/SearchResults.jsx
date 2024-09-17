import React from "react";

function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div>
      {results.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
