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
            .product
        </div>
    )
}

function Main({dispatch}: any) {
    const state = useSelector(({shop}: any) => ({
        products: shop.products,
    }))

    fetchItems(dispatch)

    return (
        <div>
            <div className="products">
                {state.products.map(el => (<Product name={el.name} price={el.price} isArchive={el.isArchive} />))}
            </div>
        </div>
    )
}

export default Main