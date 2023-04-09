import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = (props: any) => {
  return (
    <form className={classes.form}>
      <Input label="amount" input={{
        id: 'Amount' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }}/>
      <button>+</button>
    </form>
  )
}

export default MealItemForm