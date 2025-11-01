import React from 'react';
import { useSelector } from 'react-redux'

const Cart = () => {
    const data = useSelector(state => state.cart)

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {data.value.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {data.value.map(item => (
                            <div
                                key={item.id}
                                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-40 object-contain mb-4"
                                />
                                <h3 className="text-lg font-medium mb-2">{`${item.title.slice(0, 30)}  ${item.title.length > 30 ? '...' : ''}`}</h3>
                                <p className="text-indigo-600 font-bold text-xl">${item.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-12">Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;