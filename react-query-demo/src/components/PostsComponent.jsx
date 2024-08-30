import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"], // Use an array for the query key
    queryFn: fetchPosts, // The function to fetch data
    cacheTime: 5 * 60 * 1000, // Cache time set to 5 minutes
    staleTime: 0, // Data becomes stale immediately after fetching
    refetchOnWindowFocus: true, // Refetch data when the window is refocused
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
