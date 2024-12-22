import React, { useState } from "react";
import PostList from "./components/PostList";
import Header from "./components/Header";

function App() {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Posts":
        return <PostList />;
      default:
        return (
          <div>
            <h2>Welcome to My App</h2>
            <p>
              This application allows you to view Posts and Albums. Use the
              navigation bar to switch between different sections.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="container my-4">
      <div className="row mb-4">
        <div className="col">
          <Header selectedItem={selectedItem} onSelect={handleSelect} />
        </div>
      </div>
      <div className="row">
        <div className="col">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;
