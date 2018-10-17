//! -----Node Requirements------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';

//! -----Search Results Component------------------------------------------------------------------
class SearchResults extends React.Component {
  render() {
    return (
      this.props.topicData.length !== 0
        ? <div className='searchResults'>
          {
            this.props.topicData.map((topic, index) => <div key={index}>
                <a href={topic.data.url}>{topic.data.title}
                  <p>{topic.data.ups}</p>
                </a>
              </div>)
          }
        </div>
        : <div className='empty'>
          Please Specify an Article Subject And The Total Number of Results You Want to See
        </div>
    );
  }
}
SearchResults.propTypes = {
  searchResults: PropTypes.object,
};

export default SearchResults;
