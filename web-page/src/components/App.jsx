import React, { Component } from 'react';
import Search from './Search';
import '../style.css';
import './images/bear-bayt.png';
import './images/bear-teddy-christmas.png';
import './images/bear-teddy.png';
import './images/deer-christmas.png';
import './images/easter-bunny.png';
import './images/frog-coffee-break.png';
import './images/pony.png';
import './images/rabbit.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('../src/data/data.json')
      .then(response => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        this.setState({ data });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.data) {
      console.log('data');
    }
  }

  hundlerChange = (data) => {
    this.setState({ data });
  }

  render() {
    return (
      <>
        <Search data={this.state.data} />
      </>
    );
  }
}

export default App;
