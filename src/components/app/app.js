import '@babel/polyfill';
import React from 'react';
import superagent from 'superagent';

import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import SearchResults from '../search-results-list/search-results-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  componentDidMount() {
    console.log('__STATE__', this.state);
  }

  handleSubmit = event => {
    event.preventDefault();
    let searchFormCharacter = event.target.character.value;
    let url = `https://swapi.co/api/people/?search=${searchFormCharacter}`;
    this.changeTopic(url);
  };
  async changeTopic(url) {
    try {
      const searchResultData = await this.fetchData(url);
      this.setState({
        characters: searchResultData.results,
        error: null,
      });
    } catch (error) {
      let message = error.message;
      console.error(message);
      this.setState({
        characters: [],
        error: message,
      });
    }
  }
  fetchData = (url) => {
    return superagent.get(url)
      .then(result => {
        return result.body;
      });
  };
  render() {
    return (
      <main>
        <Header/> {/* new Header().render();*/}
        <div className="App">
          <SearchForm search={this.handleSubmit} error={this.state.error} />
          <SearchResults characterData={this.state.characters}/>
        </div>
      </main>
    );
  }
}
export default App;
