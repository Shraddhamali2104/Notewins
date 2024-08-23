import { useState } from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import { Signup } from './Component/Signup';
import { Home } from './Component/Home';
import { Login } from './Component/Login';
import { Navbar } from './Component/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/signup" element={<Signup/>}> </Route>
          <Route path="/home" element={<Home/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
