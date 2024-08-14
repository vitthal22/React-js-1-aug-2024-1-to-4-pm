import A from "./MyComp/A"

import { createContext } from "react"

export let myContext=createContext()
function App() {
  

  return (
    <>
     

      <myContext.Provider value={'shyam'}>
      <A></A>
        
      </myContext.Provider>
    </>
  )
}

export default App
