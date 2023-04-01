import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Login() {
    const { getUser, seterror, error } = useContext(AuthContext)

    const SubmitForm = async (e) => {
        e.preventDefault()
        let user = {
            username: e.target[1].value,
            password: e.target[2].value,
            domain: e.target[0].value
        }
        const loginData = {
            _username: user.username,
            _password: user.password,
            _subdomain: user.domain
        };

        await fetch(`https://${user.domain}.ox-sys.com/security/auth_check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: Object.keys(loginData).map(key => key + '=' + encodeURIComponent(loginData[key])).join('&')
        })
            .then(response => response.json())
            .then(data => {
                if (data.code) {
                    seterror("Company name or Username or password wrong! ")
                } else {
                    getUser({ data })
                }
            })
            .catch(() => {
                seterror("Company name or Username or password wrong! ")
            });
    }

    return (

        <form onSubmit={SubmitForm} className='w-[500px] m-auto mt-20'>
            <div className="mb-6">
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Company Name</label>
                <span className='text-red-400'>{error}</span>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Company Name" required />
            </div>
            <div className="mb-6">
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your password" required />
            </div>
            <div className="mb-6">
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </form>

    )
}

export default Login