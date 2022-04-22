import React, { createContext, useState } from 'react'

const TodoContext = createContext()

function TodoContextProvider({ children }) {
  const defaultContext = 'today'
  const [selectedProject, setSelectedProject] = useState(defaultContext)
  return (
    <TodoContext.Provider value={
      {
        selectedProject,
        setSelectedProject
      }
    }>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContextProvider, TodoContext }