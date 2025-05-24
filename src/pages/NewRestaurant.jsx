import React, { use, useState } from 'react'
import Swal from 'sweetalert2';

const NewRestaurant = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address:'',
    image:'',
  });

  const handleOnChange = (e) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.address || formData.image){
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos',
        'icon': 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }


  }

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-3xl font-bold text-center mb-6'>Agregar Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md'>
        <div className='mb-4'>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
          <input 
            type="text"
            id="name"
            name='name'
            value={formData.name}
            onChange={handleOnChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className='mb-4'>
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Descripción</label>
          <textarea 
            id="description"
            name='description'
            value={formData.description}
            onChange={handleOnChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className='mb-4'>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Dirección</label>
          <input 
            type="text"
            id="address"
            name='address'
            value={formData.address}
            onChange={handleOnChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">URL de la imagen</label>
          <input
            type="url"
            id="image"
            name='image'
            value={formData.image}
            onChange={handleOnChange} 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-red-900 text-white py-3 rounded-lg hover:bg-pink-700 trans">
          Guardar Restaurante
        </button>
      </form>
    </div>
  );
}

export default NewRestaurant
