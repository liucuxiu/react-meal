import classes from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props: any, ref: any) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  )
})

export default Input