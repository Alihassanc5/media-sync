import React, { useState } from "react";
import PostList from "./components/PostList";
import Header from "./components/Header";
import UserList from "./components/UserList";
import { UserContext } from "./Contexts";

function App() {
  const [selectedItem, setSelectedItem] = useState("Users");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Posts":
        return <PostList />;
      default:
        return <UserList />;
    }
  };

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
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
    </UserContext.Provider>
  );
}

export default App;
