import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput, { createFilter } from 'react-search-input';
import imgPath from '../../constants';

const KEYS_TO_FILTERS = ['name'];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const { data } = this.props;

    if (data) {
      console.log('data', data);
      const filteredEmails = data
        .filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
      console.log('filter', filteredEmails);
      return (
        <>
          <div className="wrapper">
            <SearchInput className="search-input" onChange={this.searchUpdated} />
            <div className="products-wrapper">
              {filteredEmails.map(i => (
                <div className="product-container">
                  <figure>
                    <img className="product-img" src={`${imgPath}${i.img}`} alt={i.name} />
                    <b><figcaption className="product-title">{i.name}</figcaption></b>
                  </figure>
                  <span>{`${i.price} ${i.currency}`}</span>
                  <div>
                    <p>{i.description}</p>
                    <span>{i.availability}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    return (
      <h1>He</h1>
    );
  }
}

Search.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Search.defaultProps = {
  data: null,
};

export default Search;
