import React from 'react'
import { Link } from 'react-router-dom';
import { IoLocationOutline, IoCartOutline, IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { useAuth } from '../Hook/AuthContext';

function Navbar() {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    return (
       <div>
         <nav className='text-white p-3 bg-gray-800 h-14 flex items-center justify-between'>
            <Link to={"/"}>
                <h2 className="uppercase text-white font-bold text-xl">cashew<span className='text-red-500'>cart</span></h2>
            </Link>
            <div className="hidden lg:flex items-center ">
                <button className='px-4 bg-red-500 text-white p-2 rounded-l'>Filter</button>
                <input type="text" className='p-2 w-96 outline-none rounded-r' placeholder='Search Products....' name="" id="" />
            </div>
            {/* btn for login and register */}
            { isLoggedIn ? (
                <Link to="/">
                    <button className='p-2 text-white  font-bold px-4 bg-red-500 '>Logout</button>
                </Link>
            ) : (


                <Link to="/login">
                    <button className='p-2 text-white  font-bold px-4 bg-red-500 '>Login / Register</button>
                </Link>
            )}

            {/* icons */}
            <div className='hidden lg:flex items-center gap-x-3'>
                <Link to="/" className='flex flex-col items-center'>
                    <IoLocationOutline className='text-2xl bg-white p-1 rounded-full text-gray-800' />
                    <span className='text-sm font-semibold'>Track</span>
                </Link>
                <Link to="/" className='flex flex-col items-center'>
                    <IoCartOutline className='text-2xl bg-white p-1 rounded-full text-gray-800' />
                    <span className='text-sm font-semibold'>Cart</span>
                </Link>
            </div>

            {/* playstrore and app store */}
            <div className='hidden lg:flex flex-col items-center'>
                <div className='flex items-center'>
                    <a href="" className='p-1 text-2xl'><FaAppStore /></a>
                    <a href="" className='p-1 text-2xl'><IoLogoGooglePlaystore /></a>
                </div>
                <span className='text-sm font-bold'>Download the App</span>
            </div>

        </nav>
        {/* second nav */}
        <nav className='min-h-12 border-b border-zinc-500 bg-white p-2 flex items-center mt-3'>
            <img src="/kscdc.png" className='hidden lg:block h-36 object-cover' alt="" />
            <div>
                <h1><span className='font-bold text-xl'>THE KERALA STATE CASHEW DEVELOPEMENT CORPORATION LTD</span> <br />
                <span> A GOVERNMENT OF KERALA UNDERTAKING (AN ISO 22000-2005 CERTIFIED COMPANY)</span>
                </h1>
            </div>
        </nav>
       </div>
    )
}

export default Navbar