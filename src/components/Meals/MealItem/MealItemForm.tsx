import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';
const MealItemForm = (props: any) => {
  const [amountValid, setAmountValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event: any) => {
    event.preventDefault()

    // @ts-ignore
    const enteredAmount = amountInputRef.current!.value
    const enteredAmountNumber= +enteredAmount

    //validate
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountValid(false)
      return
    }

    // call function pass from context
    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
        id: 'Amount' + props.id,
        type: 'number',
        step: '1',
        defaultValue: '1'
      }}/>
      <button>+</button>
      {!amountValid && <p>pls enter 1-5</p>}
    </form>
  )
}

export default MealItemForm