import React from 'react'

const Items = ({image, name, new_price, old_price}) => {
  return (
    <div className='w-80 hover:scale-105 duration-700'>
      <img src={image} alt='item-image'/>
      <p className='mt-2'>{name}</p>
      <div className='flex gap-5 mb-8'>
        <div className=' text-slate-800 text-sm font-semibold'>
            ${new_price}
        </div>
        <div className=' text-slate-500 text-sm font-medium line-through'>
            ${old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
