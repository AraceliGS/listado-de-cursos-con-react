import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title, description}) => (
  <header>
    <h1>{title}</h1>
    <p>{description}</p>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Header;


  
