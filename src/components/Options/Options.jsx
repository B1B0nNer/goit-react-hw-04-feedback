import React from 'react';
import PropTypes from 'prop-types';

export default function Options({ onClick, options }) {
  const onClickHandler = e => {
    onClick(e.target.dataset.name);
  };
  return (
    <>
      {options.map(item => (
        <button onClick={onClickHandler} data-name={item} key={item}>
          {item}
        </button>
      ))}
    </>
  );
}

Options.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};