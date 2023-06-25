import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';
import PropTypes from 'prop-types';


const CartItem = ({ id, name, price, quantity}) => {

  const { removeItem } = useContext(CartContext); // Obtiene la función removeItem del contexto

  const handleRemoveItem = () => {
    removeItem(id); // Llama a la función removeItem pasando el ID del elemento a eliminar
  };

  return (
    <div className="CartItem">
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${price * quantity}</p>
      <button onClick={handleRemoveItem}>Eliminar</button> {/* Agrega un botón para eliminar el elemento */}

  
    
    </div>
  )
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
   };

export default CartItem;
