import React from 'react';

export default function UserCard({ name, age, isAdmin }) {
  const getRole = () => {
    if (isAdmin = true) {
      return 'Administrator';
    } else {
      return 'User';
    }
  };

  const cardStyle = {
    border: '1px solid black',
    padding: 10,
    marginTop: '15px',
    borderRadius: '8px',
    backgroundColor: 'lightgrey'
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Age: {age ? age : 'Unknown'}</p>
      <p style={{ fontWeight: 'bold', color: 'green' }}>Role: {getRole}</p>
    </div>
  );
}
