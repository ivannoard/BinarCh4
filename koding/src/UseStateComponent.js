import React, { useEffect, useState } from 'react'

const UseStateComponent = () => {
  const [count, setCount] = useState(0)

  const renderBars = () => {
    const bars = []
    for (let i = 0; i < count; i++) {
      bars.push(
        <div style={{ backgroundColor: 'tomato', height: '100%', width: '10%' }}>

        </div>
      )
    }
    return bars
  }

  const operations = (params) => {
    if (params === 'add') {
      if (count < 10) setCount((prevCount) => prevCount + 1)
    } else {
      if (count > 0) setCount(count - 1)
    }
  }

  console.log(count);
  return (
    <div>
      <h3>Penggunaan UseState</h3>
      <div style={{
        border: '1px solid',
        height: '100px',
        width: '80%',
        margin: '2rem auto',
        display: 'flex'
      }}>
        {renderBars()}
      </div>
      <div>
        <button style={{ padding: '1rem 2rem' }} onClick={() => operations('minus')}>-Bar</button>
        <button style={{ padding: '1rem 2rem' }} onClick={() => operations('add')}>+Bar</button>
      </div>
    </div>
  )
}

export default UseStateComponent