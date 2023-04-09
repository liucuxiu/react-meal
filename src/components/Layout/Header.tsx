
import mealsImage from '../assets/meal.png'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton/>
      </header>


      <div className={classes['main-image']}>
        <img src={mealsImage}  alt='A table full of delicious food!'/>

      </div>
    </>
  )
}

export default Header