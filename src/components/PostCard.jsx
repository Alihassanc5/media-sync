import React from "react";

const PostCard = ({ children, title }) => {
  return (
    <div className="card text-center mb-4">
      <div className="card-body">
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="card-text text-truncate">{children}</p>
        <a href="#" className="btn btn-primary">
          Open
        </a>
      </div>
    </div>
  );
};

export default PostCard;
