

import { AuthContext } from "./Conetxt/AuthContext"
import "./app.css"
import {useContext} from "react"

function App() {
  const name = useContext(AuthContext)
  console.log(name)
  return (
   <div className="App">
   {name}
   </div>
   
  )
 
}

export default App