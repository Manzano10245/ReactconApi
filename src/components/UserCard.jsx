import React from 'react';
import './UserCard.css';

const UserCard = ({ firstName, lastName, email }) => {
  return (
    <div className="usercard">
      <h3>{firstName} {lastName}</h3>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;
