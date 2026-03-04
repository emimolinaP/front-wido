import { useState } from 'react'

const RugsCard = () => {
    const [size, setSize] = useState('60cm x 60cm')

    const phoneNumber = '5493537327181' 

    const handleCotizar = () => {
        const message = `Hola! Quiero cotizar una alfombra de tamaño ${size}`
        const encodedMessage = encodeURIComponent(message)

        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

        window.open(url, '_blank')
    }

    return (
        <div className="w-96 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
            {/* Imagen */}
            <img
                src="/images/diseño.png"
                alt="Alfombra personalizada"
                className="w-full h-64 object-cover"
            />

            {/* Contenido */}
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">
                    Alfombra Personalizada
                </h2>

                <p className="text-gray-600 mb-4">
                    Elegí el tamaño ideal para tu espacio y cotizá al instante.
                </p>
                <p className="text-gray-600 mb-4">
                    Subí una foto guia del diseño al chat de whatsapp.
                </p>

                <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="border p-3 rounded-lg w-full mb-5 text-lg"
                >
                    <option value="60x60">60cm x 60cm</option>
                    <option value="80x80">80cm x 80cm</option>
                    <option value="100x60">100cm x 60cm</option>
                    <option value="100x100">100cm x 100cm</option>
                    <option value="120x120">120cm x 120cm</option>
                    <option value="140x120">140cm x 120m</option>
                    <option value="personalizado">Otro..</option>
                </select>

                <button
                    onClick={handleCotizar}
                    className="bg-green-500 text-white w-full py-3 text-lg rounded-xl hover:bg-green-600 transition"
                >
                    Cotizar por WhatsApp
                </button>
            </div>
        </div>
    )
}

export default RugsCard
