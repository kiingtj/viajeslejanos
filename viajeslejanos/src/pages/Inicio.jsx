import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Inicio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <Header/>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Explora Destinos Lejanos</h1>
            <p className="mt-4 text-lg">Viajes económicos, aventuras inolvidables y guías para mochileros</p>
            <Link to="/destinos" className="mt-8 inline-block bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600">
              Descubre Más
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Qué encontrarás en ViajesLejanos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Viajes Económicos</h3>
              <p>Descubre cómo viajar a destinos increíbles sin romper tu presupuesto.</p>
              <Link to="/economicos" className="mt-4 inline-block text-yellow-500 hover:underline">Saber más</Link>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Aventura y Destinos Exóticos</h3>
              <p>Explora destinos que pocos se atreven a visitar y vive experiencias únicas.</p>
              <Link to="/aventura" className="mt-4 inline-block text-yellow-500 hover:underline">Saber más</Link>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Guías para Mochileros</h3>
              <p>Todo lo que necesitas para tu próxima aventura mochilera, desde rutas hasta alojamientos.</p>
              <Link to="/mochileros" className="mt-4 inline-block text-yellow-500 hover:underline">Saber más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Reseñas de nuestros Viajeros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6">
              <p className="italic">"ViajesLejanos me ayudó a planificar mi viaje de mochilero por Asia. ¡Increíble experiencia!"</p>
              <h4 className="mt-4 font-semibold">- Alex, mochilero</h4>
            </div>
            <div className="p-6">
              <p className="italic">"Gracias a sus reseñas, pude encontrar los mejores vuelos y alojamientos a precios increíbles."</p>
              <h4 className="mt-4 font-semibold">- Marta, aventurera solitaria</h4>
            </div>
            <div className="p-6">
              <p className="italic">"Las guías para destinos exóticos fueron de gran ayuda en mi último viaje."</p>
              <h4 className="mt-4 font-semibold">- Juan, explorador</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos Recomendados */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Destinos Recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/images/bali.jpg" alt="Bali" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bali, Indonesia</h3>
                <p className="text-gray-700">Conocida por sus templos y playas impresionantes, Bali es un destino económico y exótico.</p>
                <Link to="/destinos/bali" className="mt-4 inline-block text-yellow-500 hover:underline">Explorar</Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/images/patagonia.jpg" alt="Patagonia" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Patagonia, Chile/Argentina</h3>
                <p className="text-gray-700">Ideal para los amantes del trekking y la aventura, con paisajes naturales impresionantes.</p>
                <Link to="/destinos/patagonia" className="mt-4 inline-block text-yellow-500 hover:underline">Explorar</Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/images/marruecos.jpg" alt="Marruecos" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Marruecos</h3>
                <p className="text-gray-700">Descubre sus vibrantes mercados, desiertos y montañas. Un destino lleno de aventura y cultura.</p>
                <Link to="/destinos/marruecos" className="mt-4 inline-block text-yellow-500 hover:underline">Explorar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
