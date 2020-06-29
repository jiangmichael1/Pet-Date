import React from 'react';

const SearchBar = (props) => {

  const petInfo = (evt) => {
    props.handleSearchTerm(evt.target.value);
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search for a liked pet"
        value={props.searchTerm}
        onChange={petInfo}
      />
    </div>
  )
};

export default SearchBar;