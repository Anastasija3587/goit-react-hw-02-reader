import React from 'react';
import PropTypes from 'prop-types';
import styled from './Controls.module.css';

const Controls = ({ forward, back, btn }) => {
  return (
    <section>
      <button
        className={btn === 0 ? styled.disable : styled.button}
        onClick={back}
        type="button"
      >
        Назад
      </button>
      <button
        className={btn === 11 ? styled.disable : styled.button}
        onClick={forward}
        type="button"
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  forward: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
  btn: PropTypes.number.isRequired,
};

export default Controls;
