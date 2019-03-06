import React from 'react';
import PropTypes from 'prop-types';
import imgPath from '../../constants';

const CreateProducts = function (props) {
  const { data } = props;

  if (data) {
    const createMarkup = data.map(i => (
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
    ));

    return (
      <div className="wrapper">
        {createMarkup}
      </div>
    );
  }
  return (
    <h1>He</h1>
  );
};

CreateProducts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

CreateProducts.defaultProps = {
  data: null,
};

export default CreateProducts;
