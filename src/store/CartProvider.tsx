import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state: any, action: any) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
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