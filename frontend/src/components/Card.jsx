import React from 'react';
import {Link} from "react-router-dom";

const Card = ({ data : { id, title, description, image }, OnDeleteHandler  }) => {
    return (
        <Link to={`/details/${id}`} className="max-w-sm rounded overflow-hidden shadow-2xl m-4">
            <img className="w-[10rem] h-[15rem] m-auto" src={image} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base text-justify">
                    {description.slice(0,150)} <Link to={`/details/${id}`} className="text-red-700">read more</Link>
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </Link>
    );
};

export default Card;