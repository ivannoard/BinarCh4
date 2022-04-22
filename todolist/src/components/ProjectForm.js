import React from 'react'

const ProjectForm = ({ heading, value, setValue, handleSubmit, setShowModal, confirmText }) => {
  return (
    <form action="" onSubmit={handleSubmit} className='projectform'>
      <h3>{heading}</h3>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='project name...' autofocus />
      <button className='cancel' onClick={() => setShowModal(false)}>Cancel</button>
      <button className='confirm'>{confirmText}</button>
    </form>
  )
}

export default ProjectForm