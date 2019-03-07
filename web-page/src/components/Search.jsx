import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SearchInput, { createFilter } from 'react-search-input';
import Hundler from './Handler';
import {
  imgPath,
  KEYS_TO_FILTERS
} from '../constants';

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
      const filteredProducts = data
        .filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

      return (
        <Fragment>
          <header className="products-header">
          <div className="products-header-container">
            <h1 className="products-header-head">Интернет-магазин детских игрушек "Toys"</h1>
            <SearchInput className="search-input" onChange={this.searchUpdated} />
          </div>
          </header>
          <div className="wrapper">
            <div className="products-wrapper"  onClick={Hundler}>
              {filteredProducts.map(i => (
                <div className="product-container" key={`${i.name}`}>
                  <figure>
                    <img className="product-img" src={`${imgPath}${i.img}`} alt={i.name} />
                    <b><figcaption className="product-title">{i.name}</figcaption></b>
                  </figure>
                  <span className="product-price">{`${i.price} ${i.currency}`}</span>
                    <div className="hidden">
                      <p className="product-description">{i.description}</p>
                      <span className="product-availability">{i.availability}</span>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      );
    }
    return false;
  }
}

Search.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Search.defaultProps = {
  data: null,
};

export default Search;
