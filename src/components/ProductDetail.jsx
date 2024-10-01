import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import useFetch from '../hooks/useFetch';

const ProductDetail = () => {

    
    
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    const { id } = useParams();
    const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={data.thumbnail} alt={data.title}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{data.title}</h1>
                    <hr />
                    <h2 className="my-4">${data.price}</h2>
                    <p className="lead">{data.description}</p>
                    <button onClick={()=>handleCart(data)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail
