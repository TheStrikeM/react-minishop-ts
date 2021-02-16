import React from 'react'
import { fetchItems } from '../../actions/shop'
import {useDispatch, useSelector} from 'react-redux'


function Product({name, price, isArchive}: {
    name: string,
    price: number,
    isArchive: boolean,
}) {

    return (
        <div className="product">
            <div className="product__name">{name}</div>
            <div className="product__price">{`${price} долларов`}</div>
            <div className="product__acrchive">{isArchive}</div>
        </div>
    )
}

function Main() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.shop)
    fetchItems(dispatch)

    return (
        <div>
            <div className="products">
            </div>
        </div>
    )
}

export default Main
