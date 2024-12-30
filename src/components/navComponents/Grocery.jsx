import React, { useState } from 'react'
import { userContext } from '../context/UseContextProvider'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';
const Grocery = () => {

  const { product, loading } = React.useContext(userContext);
  console.log(product);

  

  {// const [product, setproduct] = useState([]);

  // const getallproduct = async () => {
  //   try {
  //     const { data } = await axios.get('https://fakestoreapi.com/products');
  //     setproduct(data);
  //     console.log(data)
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }
  // getallproduct();
  }
  if(loading){
    return <div>
      {/* <div className='mb-5 w-full px-10 flex justify-between items-center'>
        <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => useNavigate(-1)}>Backward</button>
        <h1 className='text-4xl font-extrabold  cursor-default'>Grocery</h1>
        <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => useNavigate(+1)}>Forward</button>
      </div> */}
      <h1 className='text-center my-5 text-3xl font-bold'>Loading...</h1>
      </div>
  }

  return (
    <div className='w-full flex flex-col items-center my-5 '>
      <div className='mb-5 w-full px-10 flex justify-between items-center'>
        <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => useNavigate(-1)}>Backward</button>
        <h1 className='text-4xl font-extrabold  cursor-default'>Grocery</h1>
        <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => useNavigate(+1)}>Forward</button>
      </div>
      {/* <h1>Grocery</h1> */}
      {/* <button onClick={getallproduct} className='bg-red-500 p-2 px-4 active:bg-yellow-400'>click</button> */}
      <div className='w-[85%] flex flex-wrap gap-3 justify-center'>

        {product.map((p, i) => (
          <Link
            className='w-[23%] p-2 rounded bg-zinc-300 border border-black'
            key={p.id}
            to={`/grocery/${p.title}`}
          >
            <img
              className='object-cover w-full h-[300px] rounded mb-2'
              src={p.image}
              alt=''
            />
            {p.title}
            <div>
              Price :- {p.price}$
            </div>
          </Link>
        ))}
      </div>
      <div>
      <i class="ri-arrow-left-s-line text-3xl"></i>
      </div>
    </div>
  )
}

export default Grocery