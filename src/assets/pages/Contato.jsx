import React,{useState} from 'react'

const Contato = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`Obrigado, ${nome}! Mensagem Enviada.`);
        setNome('');
        setEmail('');
        setMensagem,('');
    };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-6">Contato</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-gray-700 font-semibold mb-2">
                Nome:
            </label>
            <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500"
            placeholder="Seu nome"
            required/>
        </div>
        <div>
            <label className="block text-gray-700 font-semibold mb-2">
                Email:
            </label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500"
            placeholder="seu@email.com"
            required/>
        </div>
        <div>
            <label className="block text-gray-700 font-semibold mb-2">
                Mensagem:
            </label>
            <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500"
            placeholder="Sua mensagem..."
            required/>
        </div>

        <button type="submit"
        className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg
        hover:bg-purple-800 transition font-semibold">
            Enviar Mensagem
        </button>

      </form>
    </div>
  )
}

export default Contato
