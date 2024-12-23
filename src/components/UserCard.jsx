import React from "react";

const UserCard = ({ email, name, phone, isSelected, onSelect }) => {
  return (
    <div
      className={`card text-center ${isSelected ? "text-bg-success" : ""} mb-4`}
      onClick={onSelect}
      style={{ cursor: "pointer" }}
    >
      <div className="card-header">{email}</div>
      <div className="card-body">
        <h5 className="card-title text-truncate">{name}</h5>
        <p className="card-text text-truncate">{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
