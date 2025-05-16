import React, { createContext, useState } from 'react'
import { food_items } from '../Food'

// Step 1: Create context
export const dataContext = createContext()

// Step 2: Define context provider
function Usercontext({ children }) {
      let [Cate,setCate]=useState(food_items)
  const [input, setinput] = useState("")
let [showcart,setshowcart]=useState(false)
  const data = {
    input,
    setinput,
    Cate,
    setCate,
    showcart,
    setshowcart
  }

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default Usercontext
