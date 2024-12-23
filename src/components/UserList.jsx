import React, { useContext, useEffect, useState } from "react";
import { fetchData } from "../apis";
import { BACKEND_BASE_URL } from "../apis/constants";
import UserCard from "./UserCard";
import { UserContext } from "../Contexts";

const UserList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const {selectedUser, setSelectedUser} = useContext(UserContext)

  const url = `${BACKEND_BASE_URL}/users`;

  useEffect(() => {
    fetchData(url)
      .then((posts) => {
        setData(posts);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  // Render based on state
  if (loading)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (error) return <div>{error}</div>;
  if (data.length === 0) return <div>No Users</div>;

  return (
    <div className="row">
      {data.map((user) => (
        <div className="col-md-4" key={user.id}>
          <UserCard
            {...user}
            isSelected={user.id === selectedUser}
            onSelect={() => setSelectedUser(user.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
