import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='bg-red-900 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <img src='https://img.icons8.com/?size=100&id=115346&format=png&color=000000' alt='Logo' className='w-8 h-8 mr-2'></img>
        <h1 className='text-2xl fond-bold'>Directorio de Restaurantes</h1>
        <div className='space-x-4'> 
            <Link to ="/" className='hover:text-blue-300 transition duration-300 ease-in-out'>Home</Link>
            <Link to ="/search" className='hover:text-blue-300 transition duration-300 ease-in-out'>Search</Link>
            <Link to ="/new" className='hover:text-blue-300 transition duration-300 ease-in-out'>New</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
