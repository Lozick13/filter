import React from 'react';
import { BaseButton } from '../UI/Buttons/BaseButton';
import classes from './tollbar.module.css';

export const Toolbar = ({ filters, onSelectFilter, selected }) => {
  return (
    <>
      <div className={classes['container']}>
        {filters.map((filter, index) => (
          <BaseButton
            onClick={onSelectFilter}
            buttonText={filter}
            buttonActive={selected === filter}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
