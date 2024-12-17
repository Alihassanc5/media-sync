import React from "react";
import PostList from "./components/PostList";
import Header from "./components/Header";

function App() {
  return (
    <div className="container my-4">
      <div className="row mb-4">
        <div className="col">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <PostList />
        </div>
      </div>
    </div>
  );
}

export default App;
