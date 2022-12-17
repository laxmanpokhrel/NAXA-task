import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchProjects } from "./store/actions"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProjects())
  }, [])
  const { status, list } = useSelector(state => state.project)

  return (
    <div className="App">
      <div>{status}</div>
      {list.map((project, index) => <div key={index}><small >{project.title}</small><br /></div>)}
    </div>
  )
}

export default App
