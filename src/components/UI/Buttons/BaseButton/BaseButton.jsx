import React from 'react';
import classes from './baseButton.module.css';

export const BaseButton = ({ buttonText, buttonActive, onClick }) => {
  return (
    <>
      <button
        className={`${classes['btn']} ${buttonActive ? classes['btn_active'] : ''}`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  );
};
