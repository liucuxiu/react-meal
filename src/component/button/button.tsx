import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0)  // the convention is to write [something, setSomething].
  function handleClick() {
    setCount(count + 1)
  }
  return (
    <button onClick={handleClick}>
      I'm a button clicked { count }
    </button>
  );
}

export default MyButton