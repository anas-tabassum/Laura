import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartUpdate } from "../store/cartSlice.js";
import Loader from "../components/Loader.jsx";

const Details = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(!loading);
      });
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <div
        className={`mt-24 p-4 flex justify-center items-center ${
          loading ? "hidden" : ""
        }`}
      >
        <div className="bg-white shadow-xl rounded-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 flex justify-center items-center p-4">
            <img
              className="object-contain h-80"
              src={data.image}
              alt={data.title}
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
              <p className="text-gray-700 text-base mb-6 text-justify">
                {data.description}
              </p>
              <p className="text-xl font-bold text-green-600 mb-2">
                ${data.price}
              </p>
            </div>
            <div className="mt-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1 rounded-full">
                #{data.category}
              </span>
              <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-3 py-1 rounded-full">
                #featured
              </span>
              <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-3 py-1 rounded-full">
                #trending
              </span>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mt-8 cursor-pointer"
              onClick={() => dispatch(cartUpdate(data))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
