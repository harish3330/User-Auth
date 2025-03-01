import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const FeaturedProducts = () => {
    const [Data, setData] = useState(0)
    const [products, setproducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setproducts(res.data)
        })
    }, [])
    return (
        <div className='m-8 flex flex-col gap-8'>
            <p className='flex flex-row font-semibold w-max gap-2 hover:border-2 border-black cursor-pointer rounded-lg'><ShoppingCartIcon className='w-7 h-7'/>{Data}</p>
            <h3 className='flex justify-center text-bold text-3xl'>Featured Products</h3>
            <div className='flex justify-end'>
            <button className=" hover:border-2 border-black cursor-pointer bg-gradient-to-r from-red-600 to-red-400 rounded-md " onClick={() => { setData(0) }}>Reset Cart</button>
            </div>
            <div className='grid grid-flow-row grid-cols-4 gap-4'>
                {
                    products.map((product) => {
                        console.log(product);
                        return (
                            <div className='border border-black'>
                                <img className='h-72' src={product.image} alt={product.title} />
                                <div className='flex justify-between px-4 py-4'>
                                    <p>{product.price}</p>
                                    <button onClick={() => { setData(Data + 1) }} className='bg-green-600 px-4 py-2 rounded text-white'>Add to cart</button>
                                </div>
                            </div>

                        )
                    })

                }
            </div>

        </div>
    )
}

export default FeaturedProducts;