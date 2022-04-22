import React, { useState, useEffect } from 'react'
import axios from 'axios'
const GuessImageComponent = () => {
  const [showStatement, setShowStatement] = useState(false)
  const [boxPicked, setBoxPicked] = useState(0)
  const [image, setImage] = useState('')

  useEffect(() => {
    setTimeout(() => {
      console.log('setTimeout');
      setShowStatement(true)
    }, 2000)
  }, [])
  // const [counter, setCounter] = useState(0)
  useEffect(() => {
    if (boxPicked === 0) {
      setImage('')
    } else {
      fetchImage(boxPicked)
    }
  }, [boxPicked])

  const fetchImage = async (boxId) => {
    if (boxId === 1) {
      const response = await axios.get('https:://randomfox.ca/floof/?ref=apilist.fun')
      setImage(response.data.image)
    } else if (boxId === 2) {
      const response = await axios.get('https://aws.random.cat/meow?ref=apilist.fun')
      setImage(response.data.file)
    } else if (boxId === 3) {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random')
      setImage(response.data.message)
    }
  }

  return (
    <div>
      {showStatement && (
        <>
          <h1 className='scary-text'>
            Pick a Box
          </h1>
          <div className="box-container">
            <div className="box" id="1" onClick={(e) => setBoxPicked(parseInt(e.target.id))}>
              <h2>Satu</h2>
            </div>
            <div className="box" id="2" onClick={(e) => setBoxPicked(parseInt(e.target.id))}>
              <h2>Dua</h2>
            </div>
            <div className="box" id="3" onClick={(e) => setBoxPicked(parseInt(e.target.id))}>
              <h2>Tiga</h2>
            </div>
          </div>
        </>
      )}
      {image && (
        <img src={image} className='animal-image' />
      )}
      {/* <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>add</button> */}
    </div>
  )
}

export default GuessImageComponent