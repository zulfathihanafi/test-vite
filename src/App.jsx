import React from 'react'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [arrayData, setArrayData] = useState([])
  return (
    <div style={{ minWidth:'100vw',minHeight:'100vh'}}>
      {arrayData.map((data)=>{
        return(
          <>
          <p>
            Hmmm, {data}
          </p>
          <br />
          </>
        )
      })}
      <input onChange={(e)=>{
        setName(e.target.value)
      }}></input>
      <button onClick={()=>{
        setArrayData([...arrayData,name])
      }}>Add</button>
    </div>
  )
}

export default App