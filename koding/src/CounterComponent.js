import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from './redux/counterReducer'
const CounterComponent = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  console.log(counter);
  const handleIncrement = () => {
    dispatch(incremented())
  }
  const handleDecrement = () => {
    dispatch(decremented())
  }
  return (
    <>
      <div>
        <h1>{counter.value}</h1>
        <button onClick={() => handleIncrement()}>inc</button>
        <button onClick={() => handleDecrement()}>dec</button>
      </div>
    </>
  )
}

export default CounterComponent