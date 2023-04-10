import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props: any) => {
  const cartContext = useContext(CartContext)

  const numberOfCartItems = cartContext.items.reduce((current: any, item: any) => {
    return current + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClickCart}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>

    </button>
  )
}

export default HeaderCartButton