import {Routes, Route} from 'react-router-dom'
import Home from './MyComp/Home'
import About from './MyComp/About'
import Contact from './MyComp/Contact'
import MyNav from './MyComp/MyNav'
function App() {
  

  return (
    <>
      <MyNav></MyNav>

      {/* creating routes */}
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
