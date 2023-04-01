import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SinglePage() {
    const product = useLocation()?.state
    return (
        <div className='sm:ml-64 min-h-screen'>

            <a href="/admin/products" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">back to products</a>


            <div class="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product?.name}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    {product.productName}
                </p>
            </div>

        </div>
    )
}

export default SinglePage