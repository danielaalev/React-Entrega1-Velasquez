import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div className="container">
      <p>{props.greeting}</p>
    </div>
  );
};

export default ItemListContainer;