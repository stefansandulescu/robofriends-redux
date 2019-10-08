import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <label for='searchField'>Search Robots</label>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        id='searchField'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;