import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="type keywords"
                className="search-input"
            />
        </div>
    );
};

export default SearchBox;
