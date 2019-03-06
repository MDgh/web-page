import React, { Component } from 'react';
import CreateProducts from './CreateProducts';
import '../style.css';

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

  hundlerChange = (data) => {
    this.setState({ data });
  }

  render() {
    return (
      <CreateProducts data={this.state.data} />
    );
  }
}

export default App;
