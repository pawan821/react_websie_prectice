import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../../context/UseContextProvider';

const ProductDetail = () => {
  const { id } = useParams();
  const { product } = useContext(userContext);
  const navigate = useNavigate();

  const item = product.find(p => p.title === id);
  console.log(item);

  if (!product) {
    return <div>product not found</div>
  }
  return (
    <div className='flex items-center flex-col w-full'>
      <div className='mb-5 w-full px-10 flex justify-between items-center'>
        <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => navigate(-1)}>Backward</button>
        <h1 className='text-4xl mt-4 font-extrabold cursor-default'>Product Detail</h1>
        <button className='text-lg font-semibold px-5 rounded bg-zinc-400' onClick={() => navigate(+1)}>Forward</button>
      </div>
      <div className=' my-5 p-3 bg-zinc-300 flex'>
        <div className='p-2'>
          <img
            className=' h-[400px]'
            src={item.image}
          />
        </div>
        <div className='h-[100%] flex flex-col justify-center  my-auto gap-8 p-4'>
          <h1 className='max-w-[500px] text-xl font-extrabold'>{item.title}</h1>
          <p className='max-w-[400px]'>{item.description}</p>
          <p className='text-xl font-extrabold'>Price: ${item.price}</p>
        </div>
      </div>
      <div className='mt-5 flex gap-10'>
        <i class="ri-arrow-left-s-line text-3xl p-3" onClick={() => navigate(-1)}></i>
        <i class="ri-arrow-right-s-line text-3xl p-3" onClick={() => navigate(+1)}></i>
      </div>
    </div>
  )
}

export default ProductDetail;