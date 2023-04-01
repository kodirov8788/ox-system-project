import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
    const [allData, setAllData] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [searchData, setSearchData] = useState([])
    const [sortedData, setSortedData] = useState([])


    const [size, setSize] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    let localStorageData = JSON.parse(localStorage.getItem("auth"))
    const token = localStorageData.token
    useEffect(() => {
        const getProducts = async () => {

            const params = {
                size: size, // replace with the desired page size
                page: currentPage // replace with the desired page index
            };

            const urlParams = new URLSearchParams(Object.entries(params)).toString();

            await fetch(`https://toko.ox-sys.com/variations?${urlParams}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    // handle the response data
                    setAllData(data)
                    // console.log(data)
                })
                .catch(error => {
                    // handle the error
                    console.error(error);
                });
        }

        getProducts()
    }, [currentPage, sortedData])

    useEffect(() => {
        const getSearch = async () => {
            await fetch(`https://toko.ox-sys.com/variations`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setSearchData(data)
                })
                .catch(error => {
                    // handle the error
                    console.error(error);
                });
        }

        getSearch()

    }, [searchInput])



    return <ProductContext.Provider value={{ allData, setSize, setCurrentPage, currentPage, setSearchData, searchData, setSearchInput, searchInput, setSortedData, sortedData }}>{children}</ProductContext.Provider>
}