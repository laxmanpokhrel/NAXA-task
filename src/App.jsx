import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './components/Form'
import './App.css'
// import Notification from './components/Notification'
import { fetchProjects } from "./store/actions"
// import useNotification from './customHooks/useNotification'
import Map from './components/Map'
import Portfolio from './pages/portfolio'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(fetchProjects())
  }, [])
  const { status, list } = useSelector(state => state.project)
  // const { Notice } = useNotification()

  return (
    <div className="App">
      <Portfolio />
      <div>{status}</div>
      {list.map((project, index) => <div key={index}><small >{project.title}</small><br /></div>)}
      {/* <Map /> */}
      {/* <Form /> */}
    </div>
  )
}
export default App
