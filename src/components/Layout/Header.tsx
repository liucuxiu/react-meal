
import mealsImage from '../../assets/meal.png'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import React from 'react';

const Header: React.FC<{ onShowCart: any }> = (props: any) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClickCart={props.onShowCart}/>
      </header>


      <div className={classes['main-image']}>
        <img src={mealsImage}  alt='A table full of delicious food!'/>

      </div>
    </>
  )
}

export default Header