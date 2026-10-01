import React from 'react'

const Home = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Página inicial</h1>
      <p className="text-lg text-gray-600">Bem-vindo ao meu app com React Router!</p>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Oque você encontra aqui:</h2>
        <ul className="text-left space-y-2">
            <li>Navegação simples</li>
            <li>Múltiplas páginas</li>
            <li>React Router</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
