import React from 'react'
import Mininav from './Mininav'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-evenly py-4'>
        <h2 className='text-blue-600 italic text-3xl font-semibold '>Flipcart</h2>
        <input
          type='text'
          placeholder='Search for Products, Brands and more'
          className='w-1/2 bg-gray-200 px-4 rounded placeholder:text-lg placeholder:font-normal'
        />
        <select>
          <option value="option1">Login</option>
          <option value="option1">Option 1</option>
          <option value="option1">Option 1</option>
          <option value="option1">Option 1</option>
        </select>
        <a>card</a>
        <a>Become a Seller</a>
      </nav>
      <Mininav/>

    </>
  )
}

export default Navbar