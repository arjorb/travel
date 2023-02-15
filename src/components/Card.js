import React from 'react';
import CardItem from './CardItem';
import data from '../data';
const Card = () => {
  const cardElement = data.map(item => {
    return <CardItem key={item.id} data={item} />;
  });
  return <>{cardElement}</>;
};

export default Card;
