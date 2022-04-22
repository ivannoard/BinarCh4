import React, { useState } from 'react'
import { Plus } from 'react-bootstrap-icons'
import Modal from './Modal'
import ProjectForm from './ProjectForm'
const AddNewProject = () => {
  const [showModal, setShowModal] = useState(false)
  const [projectName, setProjectName] = useState('')
  const handleSubmit = (e) => {

  }
  return (
    <div className='addnewproject'>
      <div className="add-btn">
        <span onClick={() => setShowModal(!showModal)}>
          <Plus />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading='New Project'
          value={projectName}
          setValue={setProjectName}
          setShowModal={setShowModal}
          confirmText='+ Add Project'
        />
      </Modal>
    </div>
  )
}

export default AddNewProject