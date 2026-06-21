import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changetodarkmode, changetolightmode } from '../../Redux/slice/Theamslice'

function Navbar() {
    const dispatch = useDispatch()
    const theam = useSelector((state)=>state.Theam.value)
  return (
    <div>
      <h1>Navbar</h1>
      <h1>The current theam is : {theam}</h1>
      <button onClick={(()=>dispatch(changetodarkmode()))}>Change to Dark</button>
      <button onClick={(()=>dispatch(changetolightmode()))}>Change to Light</button>
    </div>
  )
}

export default Navbar
