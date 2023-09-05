import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

const CartWidget = () => {
  const itemCount = 3; 
  
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span> ({itemCount})</span>
    </div>
  );
};

export default CartWidget;