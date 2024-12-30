import React, { useContext } from 'react'
import { userContext } from '../context/UseContextProvider'
import { Link } from 'react-router-dom';

const Appliances = () => {

  const { product, loading } = React.useContext(userContext);
    console.log(product);

    if(loading){
      return <div>
        <h1 className='text-center my-5 text-3xl font-bold'>Loading...</h1>
        </div>
    }

  return (
    <div className='w-full flex flex-col items-center my-5 '>
      <div className='mb-5 w-full px-10 flex justify-between items-center'>
        <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => useNavigate(-1)}>Backward</button>
        <h1 className='text-4xl font-extrabold cursor-default'>Appliances</h1>
        <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => useNavigate(+1)}>Forward</button>
      </div>
      <div className='w-[85%] flex flex-wrap gap-3 justify-center'>
        {product.map((p, i) => (
          <Link
            className='w-[23%] p-2 rounded bg-zinc-300 border border-black'
            key={p.id}
            to={`/appliances/${p.title}`}
          >
            <img
              className='object-cover w-full h-[300px] rounded mb-2'
              src={p.image}
            />
            {p.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Appliances