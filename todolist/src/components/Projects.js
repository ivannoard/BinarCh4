import React, { useState } from 'react'
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons'
import AddNewProject from './AddNewProject'
import Project from './Project'

const Projects = () => {
  const [showMenu, setShowMenu] = useState(true)
  const [edit, setEdit] = useState(false)
  const pencilColor = edit ? "#1EC94C" : "#000000"
  const projects = [
    { id: 1, name: "personal", numOfTodos: 0 },
    { id: 2, name: "work", numOfTodos: 1 },
    { id: 3, name: "other", numOfTodos: 2 }
  ]
  return (
    <div className='projects'>
      <div className="header">
        <div className="title">
          <Palette size='18' />
          <p>Projects</p>
        </div>
        <div className="btns">
          {
            showMenu && projects.length > 0 &&
            <span className='edit' onClick={() => setEdit(!edit)}>
              <PencilFill size='15' color={pencilColor} />
            </span>
          }
          <AddNewProject />
          <span className='arrow'>
            <CaretUp size='20' />
          </span>
        </div>
      </div>
      <div className="items">
        {
          projects.map(item => (
            <Project
              key={item.id}
              project={item}
              edit={edit}
            />
          ))
        }
      </div>
      {/* <AddNewProject />
      <Project /> */}
    </div>
  )
}

export default Projects