import React from 'react'
import { changeLoading, fetchItems, setItems } from '../../actions/shop'
import {useSelector} from 'react-redux'
import axios from 'axios'


function Product({name, price, isArchive, onAdd}: {
    name: string,
    price: number,
    isArchive: boolean,
    onAdd: any
}) {

    return (
        <div className="product">
            <div className="product__name">{`Название ${name}`}</div>
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

    React.useEffect(() => {
        fetchItems(dispatch)
    }, [])

    return (
        <div>
            <div className="products">
                {state.products.map((el: any) => (<Product key={el.id} onAdd={el.onAdd} name={el.name} price={el.price} isArchive={el.isArchive} />))}
            </div>
        </div>
    )
}

export default Main
