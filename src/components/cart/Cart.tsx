import React from 'react'
import { useSelector } from 'react-redux'
import './cart.sass'

function CartItem({name, price, isArchive, onDelete}: any) {
    return (
        <div className="citem">
            <div className="citem__name">Название {name}</div>
            <div className="citem__price">{price}</div>
            <div className="citem__isArchive">{isArchive}</div>
            <div onClick={() => onDelete({name, price})} className="citem__delete">Delete</div>
        </div>
    )
}

function Cart({onDelete}: any) {

    const state = useSelector(({cart}: any) => ({
        items: cart.items,
        totalCount: cart.totalCount,
        totalPrice: cart.totalPrice
    }))

    return (
        <div>
            <div className="cart">
                <div className="cart__items">
                    {state.items.map((el: any) => (
                        <CartItem name={el.name} price={el.price} isArchive={el.isArchive} onDelete={onDelete} />
                    ))}
                </div>
                <div className="totals">
                    <div className="totals__count">{state.totalCount}</div>
                    <div className="totals__price">${state.totalPrice}</div>
                </div>
                
            </div>
        </div>
    )
}

export default Cart
