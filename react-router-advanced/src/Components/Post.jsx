import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();
  return <h3>Viewing post {postId}</h3>;
}

export default Post;
