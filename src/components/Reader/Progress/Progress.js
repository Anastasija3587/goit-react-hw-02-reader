import React from 'react';
import PropTypes from 'prop-types';
import styled from './Progress.module.css';

const Progress = ({ number }) => {
  return <p className={styled.progress}>{number + 1}/12</p>;
};

Progress.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Progress;
