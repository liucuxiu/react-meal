import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props: any) => {
  const cartContext = useContext(CartContext)
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`

  const hasItem = cartContext.items.length > 0

  const cartItemRemoveHandler = (id: string) => {
    cartContext.removeItem(id)
  }
  const cartItemAddHandler = (item: any) => {
    cartContext.addItem(item)
  }

  const cartItems = <ul className={classes["cart-items"]}>
    {
      cartContext.items.map(item =>
        // @ts-ignore
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
              // @ts-ignore
             onRemove={cartItemRemoveHandler.bind(null, item)}
             onAdd={cartItemAddHandler.bind(null, item)}
        />
      )
    }
  </ul>

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}
export default Cart