import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="shadow-xl bg-gray-500 hover:shadow-gray-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-white text-xl font-semibold">Blog</a>
                        </div>
                        <div className=" md:block sm:block">
                            <div className="ml-10 flex items-baseline space-x-4 sm:px-3 ">
                                <Link to="/blog" className="text-white hover:bg-gray-200 hover:text-gray-800 hover:font-bold  px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link to="/contact" className="text-white hover:bg-gray-200 hover:text-gray-800 hover:font-bold px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                                <Link to="/about" className="text-white hover:bg-gray-200 hover:text-gray-800 hover:font-bold px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar