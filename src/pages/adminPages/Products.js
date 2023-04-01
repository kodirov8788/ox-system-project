import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductContext'
import SearchData from '../../components/SearchData'
import { Link } from 'react-router-dom'

function Products() {
    const { allData, currentPage, setCurrentPage, sortedData } = useContext(ProductContext)

    console.log(allData.items)

    let ITEMS_PER_PAGE = 10

    let plusPage = currentPage + 10

    const totalPages = Math.ceil(allData.total_count / ITEMS_PER_PAGE);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    let lastIndex = totalPages - 10
    return (
        <div className='sm:ml-64 min-h-screen'>
            <h1 className='p-4 '>Products</h1>
            <SearchData />

            <div className="grid grid-cols-3 gap-2 mt-3">
                {sortedData?.length ? "" : allData.items?.map(product => (
                    <Link to={`/admin/product/${product.id}`} state={product} class="block max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Name : {product.name}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Product Name: {product.productName}</p>
                    </Link>
                ))
                }

                <div className="fixed bottom-10 left-80">
                    <nav aria-label="Page navigation example">
                        <ul class="inline-flex items-center -space-x-px">
                            <button disabled={currentPage < 2 ? true : false} onClick={() => setCurrentPage(currentPage - 1)}>
                                <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Previous</span>
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </a>
                            </button>
                            {pageNumbers.slice(currentPage, (plusPage)).map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    disabled={pageNumber === currentPage}
                                >
                                    <li>
                                        <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{pageNumber}</a>
                                    </li>
                                </button>
                            ))}

                            <button disabled={currentPage > lastIndex ? true : false} onClick={() => setCurrentPage(currentPage + 1)}>
                                <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span class="sr-only">Next</span>
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                </a>
                            </button>
                        </ul>
                    </nav>

                </div>

            </div>
        </div>
    )
}

export default Products