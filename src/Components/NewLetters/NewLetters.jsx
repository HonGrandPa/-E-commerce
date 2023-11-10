import React from 'react'

const NewLetters = () => {
    return (
        <div className='bg-gradient-to-b from-herobgA  to-herobgB h-40 w-full flex justify-center items-center flex-col gap-1.5'>

            <div className=' flex justify-center items-center flex-col'>
                <h1 className='text-2xl font-semibold'>Get Exckusive Offer On Your Email</h1>
                <p className='test-lg font-medium'>Subscribe to our newletter and stay updated</p>
            </div>

            <form className='w-5/12 border-[1px]  border-gray-500 rounded-lg pl-1.5'>
            
                <input className="bg-white/10 outline-none w-[80%] h-[2rem] " type="email" placeholder="Your Email id" />
                <button className=' bg-black w-[20%] h-[2rem] rounded-lg text-white'>Subscribe</button>
           
            </form>


        </div>

    )
}

export default NewLetters
