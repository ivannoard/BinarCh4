import React, { useState, useEffect } from 'react'

const UseEffectComponent = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(() => {
    console.warn('halo')
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
      <hr />
      <h1>{count2}</h1>
      <button onClick={() => setCount2(count2 + 2)}>add</button>
    </div>
  )
}

export default UseEffectComponent