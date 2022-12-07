import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {deleteCart} from '../redux/action/index'
import { addCart } from '../redux/action/index'
import { deleteCartAll } from '../redux/action'
import './css/cart.css'


export default function Cart() {
  
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch();

    const handleClose = (product) => {
        dispatch(deleteCartAll(product))
    }

    const minusButton = (product) => {
        dispatch(deleteCart(product))
    }

    const plusButton = (product) => {
        dispatch(addCart(product))
    }

    const cartItems = (product) => {
        return (
            <div className='px-4 my-5 bg-light rounded-3' key={product.id}>
                <div className='container py-4'>
                    <button onClick={()=>handleClose(product)} className="btn btn-danger float-end"><i class="fa-solid fa-x"></i></button>
                    <div className='row justify-content-center cart-description'>
                        <div className='col-md-4'>
                            <img src={product.image} alt={product.title} height='200px' width='180px'/>
                        </div>
                        <div className='col-md-4'>
                            <h3>{product.title}</h3>
                            {/* <p className='lead font-weight-bold'>${product.price}</p> */}
                            <p className='lead font-weight-bold'>{product.qty} x ${product.price} = ${Math.floor(product.qty * product.price)}</p> 
                            <button className='btn btn-outline-dark mr-3' onClick={()=>minusButton(product)} ><i className='fa fa-minus'></i></button>
                            <button className='btn btn-outline-dark' onClick={()=>plusButton(product)}><i className='fa fa-plus'></i></button>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  
    return (
    <>
        {state.length !== 0 && state.map(cartItems)}
    </>
  )
}
