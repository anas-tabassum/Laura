import Card from "../components/Card.jsx";
import React, {useEffect, useState} from "react"
import Loader from "../components/Loader.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../store/productSlice.js";
import '../index.css'

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    const deleteHandler = (id) => {
        const filter = data.filter(item => item.id !== id);
        setData(prev => filter);
    }

    return (
        <div>
              <Loader
                  loading={loading}
              />
                <div className="flex justify-center flex-wrap mt-8">
                {
                    products && products.map((item) => (
                        <Card
                            key={item.id}
                            data = { item }
                            OnDeleteHandler = {deleteHandler}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Products