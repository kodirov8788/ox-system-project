import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

function SearchData() {
    const { searchData, setSearchInput, searchInput, setSortedData, sortedData } = useContext(ProductContext)
    const SearchFunc = (data) => {
        setSearchInput(data)
    }
    useEffect(() => {
        const sortData = () => {
            let data = searchData?.items?.filter(pro => {
                return pro.productName.toUpperCase().includes(searchInput.toUpperCase())
            })
            setSortedData(data)
        }
        if (searchInput === "") {
            setSortedData("")
        } else {
            sortData()
        }
    }, [searchInput])


    return (
        <div className="">
            < form >
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={(e) => SearchFunc(e.target.value)} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form >

            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Result:</h2>
            <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 w-4/5 m-auto">
                {sortedData ?
                    sortedData.map(product => (
                        <li className='group'>
                            <Link to={`/admin/product/${product.id}`} state={product} class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">

                                <span class="w-full">{product.productName}</span>
                                <svg aria-hidden="true" class="w-6 h-6 ml-3 group-hover:translate-x-1 duration-150" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </li>
                    )) : ""
                }


            </ol>

        </div>

    )
}

export default SearchData