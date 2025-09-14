import React from 'react';

const UserTable = ({ users, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <span className="loading-text">Loading users...</span>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="no-results">
        <p className="no-results-text">No users found</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="user-table">
        <thead className="table-header">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="table-row">
              <td className="table-cell id">{user.id}</td>
              <td className="table-cell name">{user.name}</td>
              <td className="table-cell email">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;