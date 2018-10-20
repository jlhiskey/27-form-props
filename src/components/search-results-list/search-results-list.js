//! -----Node Requirements------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';

//! -----Search Results Component------------------------------------------------------------------
class SearchResults extends React.Component {
  render() {
    return (
      this.props.characterData.length !== 0
        ? <div className='searchResults'>
          {
            this.props.characterData.map((character, index) => <div key={index}>
                <p>Character Name: {character.name}</p>
                <p>Character Height: {character.height}cm</p>
            </div>)
          }
        </div>
        : <div className='empty'>
          Search for a character from the Star Wars Universe
        </div>
    );
  }
}
SearchResults.propTypes = {
  searchResults: PropTypes.object,
};

export default SearchResults;
