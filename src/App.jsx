import {React} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Menu from './assets/components/Menu'

import Home from './assets/pages/Home'
import Sobre from './assets/pages/Sobre'
import Contato from './assets/pages/Contato'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Menu/>

        <div className="max-w-4xl mx-auto">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/contato' element={<Contato/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
