import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props: any) => {
  const cartContext = useContext(CartContext)
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`

  const hasItem = cartContext.items.length > 0

  const cartItems = <ul>
    {
      // @ts-ignore
      cartContext.items.map(item => <li>{item.name}</li>)
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