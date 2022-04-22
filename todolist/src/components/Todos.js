import React, { useContext } from 'react'
import Todo from './Todo'
import Next7Days from './Next7Days'
import { TodoContext } from '../context'

const Todos = () => {
  const { selectedProject } = useContext(TodoContext)
  const todos = [
    {
      id: 'd54sd4',
      text: "Go for a run",
      time: "10:00 AM",
      date: "06/03/2021",
      day: "6",
      checked: false,
      color: '#00ff00',
      project: 'personal'
    },
    {
      id: 'd54fdf',
      text: "Meeting",
      time: "09:00 AM",
      date: "08/03/2021",
      day: "1",
      checked: true,
      color: '#00ff00',
      project: 'work'
    }
  ]
  return (
    <div className='todos-main'>
      <div className="selected-project">
        {selectedProject}
      </div>
      <div className="todos">
        {
          selectedProject === 'next 7 days' ?
            <Next7Days todos={todos} />
            :
            todos.map(item => (
              <Todo todo={item} key={item.id} />
            ))
        }
      </div>
    </div>
  )
}

export default Todos