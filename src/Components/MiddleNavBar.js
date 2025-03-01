import Image from '../Assets/1.jpg'
import React from 'react'

const MiddleNavBar = () => {
    return (
        <div className="flex justify-center py-2 bg-gradient-to-r from-cyan-200 to-gray-100">
            <img src={Image} alt='Logo' className="h-16" />
        </div>
    )
}

export default MiddleNavBar