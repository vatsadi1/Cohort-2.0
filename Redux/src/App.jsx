 
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decremental, incremental } from './Redux/slice/Counterslice'
import Navbar from './features/component/Navbar'

function App() {
  const dispatch = useDispatch()

  const num = useSelector((state)=>state.Counter.value)

  return (
    <>
      <div>
      <h1>Counter</h1>
      <h1>{num}</h1>
      <button onClick={(()=>dispatch(incremental()))}>Increment</button>
      <button onClick={(()=>dispatch(decremental()))}>Decrement</button>
     </div>
     <Navbar/>
    </>
  )
}

export default App
