import React, { useState } from 'react';
import { Toolbar } from '../Toolbar';
import { ProjectList } from '../ProjectList';
import classes from './portfolio.module.css';

export const Portfolio = () => {
  const images = [
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
      category: 'Flayers',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
      category: 'Business Cards',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
      category: 'Websites',
    },
    {
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
      category: 'Flayers',
    },
  ];
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [selectedFilter, setSelected] = useState('All');
  const [imagesFiltered, setImagesFiltered] = useState(images);

  const onSelectFilter = e => {
    const prevSelected = selectedFilter;
    const selected = e.target.textContent;

    setSelected(selected);

    if (prevSelected === selected) {
      return;
    }

    if (selected === 'All') {
      setImagesFiltered(images);
    } else {
      const filteredImages = images.filter(image => image.category === selected);
      setImagesFiltered(filteredImages);
    }
  };

  return (
    <div className={classes.container}>
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList images={imagesFiltered} />
    </div>
  );
};
