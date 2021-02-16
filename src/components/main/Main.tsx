import React from 'react'
import { fetchItems } from '../../actions/shop'
import {useDispatch, useSelector} from 'react-redux'


function Product({name, price, isArchive, onAdd}: {
    name: string,
    price: number,
    isArchive: boolean,
    onAdd: any
}) {

    return (
        <div className="product">
            <div className="product__name">{name}</div>
            <div className="product__price">{`${price} долларов`}</div>
            <div className="product__acrchive">{isArchive}</div>
            <div onClick={() => onAdd(name, price, isArchive)} className="product__button">Add</div>
        </div>
    )
}

function Main({dispatch, onAdd}: any) {
    const state = useSelector(({shop}: any) => ({
        products: shop.products,
    }))

    fetchItems(dispatch)

    return (
        <div>
            <div className="products">
                {state.products.map((el: any) => (<Product onAdd={el.onAdd} name={el.name} price={el.price} isArchive={el.isArchive} />))}
            </div>
        </div>
    )
}

export default Main
