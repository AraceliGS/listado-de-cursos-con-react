import React from 'react';
import Table from './Table';
import PropTypes from 'prop-types';

const Section = ({paragraph, infoTable}) => (
  <section>
    <p>{paragraph}</p>
    <Table infoTable={infoTable}/>
  </section>
)

Section.propTypes = {
  paragraph: PropTypes.string.isRequired,
  infoTable: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
}

export default Section;