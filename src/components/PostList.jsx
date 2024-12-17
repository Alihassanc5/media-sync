import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { fetchData } from "../apis";
import { BACKEND_BASE_URL } from "../apis/constants";

const PostList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const url = `${BACKEND_BASE_URL}/posts`;

  useEffect(() => {
    fetchData(url)
      .then((posts) => {
        setData(posts);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  // Render based on state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (data.length === 0) return <div>No posts</div>;

  return (
    <div className="row">
      {data.map((post) => (
        <div className="col-md-4" key={post.id}>
          <PostCard title={post.title}>{post.body}</PostCard>
        </div>
      ))}
    </div>
  );
};

export default PostList;
