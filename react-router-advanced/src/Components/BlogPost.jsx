import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      {/* Fetch and display the blog post based on the ID */}
    </div>
  );
}

export default BlogPost;
