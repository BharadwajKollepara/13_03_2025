/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const uniqueKey = `${product.type}-${product.id}`;
            const existingItemIndex = prevCart.findIndex(item => item.uniqueKey === uniqueKey);
            
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: updatedCart[existingItemIndex].quantity + quantity
                };
                return updatedCart;
            }
            return [...prevCart, { ...product, quantity, type: product.type, uniqueKey }];
        });
    };

    const removeFromCart = (uniqueKey) => {
        setCart(prevCart => prevCart.filter(item => item.uniqueKey !== uniqueKey));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);