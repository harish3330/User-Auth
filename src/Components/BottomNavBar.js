import React from 'react'

const BottomNavBar = () => {
    return (
        <div className="flex justify-center gap-16 py-2 bg-gradient-to-r from-cyan-200 to-gray-100">
            <p className=' hover:border-2 border-black cursor-pointer rounded-lg'>Home</p>
            <p className='hover:border-2 border-black cursor-pointer rounded-lg'>Shop</p>
            <p className='hover:border-2 border-black cursor-pointer rounded-lg'>About</p>
            <p className='hover:border-2 border-black cursor-pointer rounded-lg'>Contact</p>
        </div>
    )
}

export default BottomNavBar