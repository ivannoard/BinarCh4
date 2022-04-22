import React, { useState } from 'react'
import ProjectForm from './ProjectForm'

const RenameProject = ({ project, setShowModal }) => {
  const [newProjectName, setNewProjectName] = useState(project.name)
  const handleSubmit = () => {

  }
  return (
    <div className='renameproject'>
      <ProjectForm
        handleSubmit={handleSubmit}
        heading='Edit project name!'
        value={newProjectName}
        setValue={setNewProjectName}
        setShowModal={setShowModal}
        confirmText='Confirm'
      />
    </div>
  )
}

export default RenameProject