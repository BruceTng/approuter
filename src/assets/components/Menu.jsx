import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Menu = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="text-white text-xl font-bold">
                MeuApp               
            </div>  

            <div className="flex space-x-6">
                <Link 
                to='/' 
                className={`px-3 py-2 rounded transition-colors ${isActive('/') ? 'bg-blue-600 text-white' :
                'text-gray-300 hover:text-white hover: bg-gray-700'}`}>
                    Home
                </Link>
                <Link
                to='/Sobre'
                className={`px-3 py-2 rounded transition-colors ${isActive('/Sobre') ? 'bg-green-600 text-white' :
                'text-gray-300 hover:text-white hover: bg-gray-700'}`}>
                    Sobre
                </Link>
                <Link
                to='/Contato'
                className={`px-3 py-2 rounded transition-colors ${isActive('/Contato') ? 'bg-purple-600 text-white' :
                'text-gray-300 hover:text-white hover: bg-gray-700'}`}>
                    Contato
                </Link>
            </div>



        </div>
    </nav>
  )
}

export default Menu
