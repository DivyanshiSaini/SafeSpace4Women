import React, { useState } from 'react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    // Here, you can implement your search functionality
  };

  return (
    <div>
      <h1>You will be okay</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPage;
