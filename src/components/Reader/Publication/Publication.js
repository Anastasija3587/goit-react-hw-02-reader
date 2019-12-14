import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ publication: { title, text } }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
