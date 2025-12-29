import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";


const Navbar = ({cartLength, auth}) => {
    const [items,setItems] = useState(0);
    const isLoggedIn = !!localStorage.getItem('login')

    useEffect(() => {
        setItems(cartLength)
    },[cartLength], auth)

    return (
        <nav className="w-full bg-gray-400 text-white px-6 py-4 shadow-md mb-12 navbar">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="space-x-4 text-lg">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/products" className="hover:underline">Products</Link>
                    <Link to="/about" className="hover:underline">About</Link>

                    { 
                     !isLoggedIn ? <Link to="/login" className="hover:underline absolute right-25">Login</Link> 
                               :
                     <Link to="/logout" className="hover:underline absolute right-10">Logout</Link>
                     }
                    
                    
                </div>
                <div className="flex mr-16">
                    <Link to="/cart">
                        <FaCartShopping className="text-5xl"/>
                    </Link>
                    <span className="text-black relative right-6 top-1">{items}</span>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
