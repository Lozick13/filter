import React from 'react';
import classes from './projectList.module.css';

export const ProjectList = ({ images }) => {
  return (
    <>
      <div className={classes['container']}>
        {images.map((image, index) => (
          <img
            className={classes['item']}
            src={image.img}
            alt={image.category}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
