import { BrowserRouter, Route } from "react-router-dom"
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <NavBar>
    <Route path="/" Component={Home} />
    </NavBar>
    </BrowserRouter>
  )
}

export default App