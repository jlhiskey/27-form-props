//! -----Node Requirements------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';

//! -----Search Form Component-----------------------------------------------------------------
class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.search} className={this.props.error ? 'No Results Found' : ''}>
          <input name='character' type='text' placeholder='Character'/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}
SearchForm.propTypes = {
  searchForm: PropTypes.object,
};

export default SearchForm;
