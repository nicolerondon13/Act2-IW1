import React from 'react'
import { restaurantsData } from '../data'

const Home = () => {
  return (
    <div className='container mx-auto p-4'>
        <h2 className='text-5xl font-bold text-center mb-8'>Restaurantes disponibles</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {restaurantsData.map ((restaurant)=> (
            <div key={restaurant.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img src={restaurant.image} alt={restaurant.name} className='w-full h-48 object-cover'></img>
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>{restaurant.name}</h3>
                <p className='text-gray-600 mb-2'>{restaurant.description}</p>
                <p className='text-gray-700'><strong>Dirección: </strong>{restaurant.address}</p>
                <button className="bg-red-900 text-white px-4 py-2 mt-4 rounded-lg hover:bg-pink-700 trans">Reservar</button>
              </div>
          </div>
          ))}
        </div>

        <div className="">
          <h3 className="font-bold mt-3"></h3>
          <div className="snap-x overflow-x-auto flex gap-4 mt-5">
            {restaurantsData.map((restaurant) => (
              <div className="snap-start scroll-ml-2">
              < img src={restaurant.image} className='w-full h-48 object-cover'></img>
              </div>
            ))}
          </div>
        </div>
    </div>
    

    


  )
}

export default Home
