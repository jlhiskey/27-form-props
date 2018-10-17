//! -----Node Requirements------------------------------------------------------------------------
import '@babel/polyfill';
import React from 'react';
import superagent from 'superagent';
//! -----Modules Requirements--------------------------------------------------------------------
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import SearchResults from '../search-results-list/search-results-list';

//! -----App Component---------------------------------------------------------------------------
class App extends React.Component {
  constructor(props) {
    super(props);
    //! -----Sets Initial State on Page Load--------------------
    this.state = {
      topics: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }
  componentDidMount(){
    console.log('__STATE__', this.state);
  }
  //! -----Handles Submit Event-------------------------------
  handleSubmit = event => {
    event.preventDefault();
    //! -----Captures Data from User Input--------------
    let searchFormBoard = event.target.text.value;
    let searchFormLimit = event.target.number.value;
    //! -----Feeds User Input into API Call-------------
    let url = `https://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;
    //! -----Feeds API response data into changeTopic()-
    this.changeTopic(url);
  };
  //! -----Handles received url data from API-----------------
  async changeTopic(url) {
    try {
      //! -----Feeds received data into fetchData()-----
      const searchResultData = await this.fetchData(url);
      //! -----Once superagent parses the data State of the Page updates
      this.setState({
        topics: searchResultData.data.children,
        error: null,
      });
      //! -----Error Handling-----------------------------
    } catch (error) {
      let message = error.message;
      console.error(message);
      this.setState({
        topics: [],
        error: message,
      });
    }
  }
  //! -----Receives data from API and parses it using superagent
  fetchData = (url) => {
    return superagent.get(url)
      .then(result => {
        return result.body;
      });
  };
  //! -----Renders HTML for user-----------------------------------------------------------------
  render() {
    return (
      <main>
        <Header/> {/* new Header().render();*/}
        <div className="App">
          <SearchForm search={this.handleSubmit} error={this.state.error} />
          <SearchResults topicData={this.state.topics}/>
        </div>
      </main>
    );
  }
}

export default App;
