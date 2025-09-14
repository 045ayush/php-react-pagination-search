import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserTable from './components/UserTable';
import Pagination from './components/Pagination';
import './styles/App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const perPage = 10;
  const totalPages = Math.ceil(totalUsers / perPage);

  const fetchUsers = async (search = '', page = 1) => {
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      params.append('page', page.toString());
      
      const response = await fetch(`${API_URL}/index.php?${params}`);
      if (!response.ok) throw new Error('Failed to fetch users');
      
      const data = await response.json();
      setUsers(data.data);
      setTotalUsers(data.total);
    } catch (err) {
      setError(err.message);
      setUsers([]);
      setTotalUsers(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchUsers(searchTerm, currentPage);
    }, searchTerm ? 500 : 0);
    
    return () => clearTimeout(timeoutId);
  }, [searchTerm, currentPage]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">User Search</h1>
        <p className="app-subtitle">Search and browse through our user directory</p>
      </header>
      
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      
      {error && (
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {!loading && (
        <div className="results-info">
          Showing {users.length} of {totalUsers} users
          {searchTerm && ` for "${searchTerm}"`}
          {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
        </div>
      )}
      
      <UserTable users={users} loading={loading} />
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;