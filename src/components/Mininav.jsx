import React from 'react'
import { NavLink } from 'react-router-dom'

const Mininav = () => {
  return (
    <nav className='py-3 border border-black'>
      <ul className='flex justify-evenly'>
        <NavLink
          className={(e) => e.isActive ? 'text-red-600' : ""}
          to={`/grocery`}>Grocery</NavLink>
        <NavLink
          className={(e) => e.isActive ? 'text-red-600' : ""}
          to={`/mobile`}>Mobile</NavLink>
        <NavLink
          className={(e) => e.isActive ? 'text-red-600' : ""}
          to={`/fashion`}>Fashion
          {/* <select className='bg-transparent'>
                    <option></option>
                    <option>Option-1</option>
                    <option>Option-2</option>
                    <option>Option-3</option>
                    <option>Option-4</option>
                </select> */}
        </NavLink>
        <NavLink
          className={(e) => e.isActive ? 'text-red-600' : ""}
          to={`/electronics`}>Electronics</NavLink>
        <NavLink
          className={(e) => e.isActive ? 'text-red-600' : ""}
          to={`/home&furniture`}>Home & Furniture</NavLink>
        <NavLink
          className={(e) => e.isActive ? 'text-red-600' : ""}
          to={`/appliances`}>Appliances</NavLink>
        <NavLink
          className={(e) => e.isActive ? 'text-red-600' : ""}
          to={`/flight-booking`}>Flight Booking</NavLink>
        <NavLink
          className={(e) => e.isActive ? 'text-red-600' : ""}
          to={`/beauty`}>Beauty, Toys & more</NavLink>
        <NavLink
          className={(e) => e.isActive ? 'text-red-600' : ""}
          to={`two-wheelers`}>Two Wheelers</NavLink>

      </ul>
    </nav>
  )
}

export default Mininav