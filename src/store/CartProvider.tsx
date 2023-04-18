import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state: any, action: any) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

    const existingCartItemIndex = state.items.findIndex((item: any) => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount // weird for add button in cart
      }
      console.log(state.items)
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }
    else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }


  if (action.type === 'REMOVE') {
    console.log(action.item)
    console.log(state.items)
    const existingCartItemIndex = state.items.findIndex((item: any) => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]
    console.log("aaaa", existingCartItem)
    const updatedTotalAmount = state.totalAmount - existingCartItem.price
    let updatedItems;

    if (existingCartItem.amount == 1) {
      updatedItems = state.items.filter((item: any) => item.id !== action.item.id)
    }
    else {
      const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1}
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }

  }

  return defaultCartState
}

const CartProvider  = (props: any) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


  const addItem = (item: any) => {
    dispatchCartAction({ type: 'ADD', item: item})
  }
  const removeItem = (item: any) => {
    dispatchCartAction({ type: 'REMOVE', item: item})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider