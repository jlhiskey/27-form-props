//! -----Node Requirements------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';

//! -----Search Form Component-----------------------------------------------------------------
class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.search} className={this.props.error ? 'No Results Found' : ''}>
          <input name='text' type='text' placeholder='Search Articles'/>
          <input name='number' type='number' defaultValue='1' min='0' max='100'/>
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
