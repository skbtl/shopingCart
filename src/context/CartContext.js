import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

//provide initial state
const initialState = {
  cartList: [],
  total: 0,
};

// create context
const CartContext = createContext(initialState);

//create a provider and wrap our app so it can access values
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    udpateTotal(updatedCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    udpateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const udpateTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total = total + product.price));
    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//create useCart
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
