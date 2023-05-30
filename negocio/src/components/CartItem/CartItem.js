import React from 'react';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div className="CartItem">
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${price * quantity}</p>
    </div>
  );
};

export default CartItem;
