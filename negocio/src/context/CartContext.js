import React  ,{ createContext, useState,useEffect} from "react";
export const CartContext = createContext({
    cart:[],
    total:0,
    totalQuantity: 0, // Agrega la propiedad totalQuantity al contexto
    

 });

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0); // Agrega el estado para totalQuantity



    useEffect(() => {
      calculateTotal();
      calculateTotalQuantity(); // Calcula la cantidad total al iniciar o cuando cambie el carrito
    },  [cart]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, {...item,quantity}])
        } else{
            console.error('el producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId)
        setCart(cartUpdated)
    }
    const clearCart = () =>{
        setCart([])
    }
    const isInCart =(itemId) => {
        return cart.some((prod) => prod.id === itemId)
    }

    const calculateTotal = () => { 
        let totalAmount = 0;
        cart.forEach((item) => {   
          totalAmount += item.quantity * item.price  ; // Suponiendo que hay una propiedad "price" en cada item del carrito
        } );
        setTotal(totalAmount);
      };


      const calculateTotalQuantity = () => {
        let quantity = 0;
        cart.forEach((item) => {
          quantity += item.quantity;
        });
        setTotalQuantity(quantity);
      };

   
    return (
        <CartContext.Provider value={ {cart, total ,totalQuantity ,addItem , removeItem, clearCart,isInCart } }>
          {children} 
             </CartContext.Provider>
     ) 
}


