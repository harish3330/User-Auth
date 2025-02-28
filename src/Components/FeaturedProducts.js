import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

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
            <p>{Data}</p>
            <h3 className='flex justify-center text-bold text-3xl'>Featured Products</h3>
            <button className="flex justify-center text-bold " onClick={() => { setData(0) }}>Reset Cart</button>
            <div className='grid grid-flow-row grid-cols-4 gap-4'>
                {
                    products.map((product) => {
                        console.log(product);
                        return (
                            <div className='border'>
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