import React, { createContext, useContext, useState} from 'react'
import { PRODUCTS } from '../product'


export const ShopContext = createContext(undefined)
 const getDefaultCart = () => {
  let cart = {}
  for(let i = 1; i < PRODUCTS.length + 1; i++){
    cart[i] = 0
  }
  return cart
 }

export const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart())


 const getTotalCartAmount = () => {
  let totalAmount = 0;

  for (const item in cartItem) {
    if (cartItem[item] > 0) {
      const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      if (itemInfo) {
        totalAmount += cartItem[item] * itemInfo.price;
        
      }
    }
  }

  return totalAmount;
}

  const addToCart = (itemId) =>{
    setCartItem((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
  }
  const removeFromCart = (itemId) =>{
    setCartItem((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
  }
  const updateCartItemsAmount = (newAmount,itemId) => {
    setCartItem((prev) => ({...prev, [itemId] : newAmount}))
  }

  const deleteFromCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId] : prev[itemId] - prev[itemId]}))
  }

   const contextValue = 
   {
    cartItem,
    addToCart,
    removeFromCart, 
    updateCartItemsAmount,
    getTotalCartAmount,
    deleteFromCart
  }
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export const useShop = () => useContext(ShopContext)


