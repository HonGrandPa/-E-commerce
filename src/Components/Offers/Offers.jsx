import React from 'react'
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {
    return (
        <section className=' w-[90%] mx-auto flex justify-around m-auto items-center bg-gradient-to-t from-herobgB to-herobgA rounded-xl'>
            <div className='w-8/12 grid place-content-center pl-8'>

                <div>
                <h1 className='text-5xl font-semibold mb-2.5'>Exclusive</h1>
                <h1 className='text-5xl font-semibold mb-2.5'>Offers For You</h1>
                <p className='text-3xl font-medium mb-2.5'>ONLY ON BEST SELLERS PRODUCTS</p>
                </div>
                 
                <button className='mt-2.5 w-36 h-10 text-md font-bold rounded-full bg-red-500 text-white cursor-pointer hover:bg-red-500/80 active:shadow-xl relative select-none'>Check Now</button>
                
            </div>
            <div className='w-4/12'>
                <img className='w-8/12 pb-10 pr-4' src={exclusive_image} alt='item-product'/>
            </div>
        </section>
    )
}

export default Offers
