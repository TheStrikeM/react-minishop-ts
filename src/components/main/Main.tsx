import React from 'react'
import { fetchItems } from '../../actions/shop'
import { useSelector } from 'react-redux'
import './main.sass'

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
            <div className="product__archive">{isArchive}</div>
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
                {state.products.map((el: any) => (<Product onAdd={onAdd} name={el.name} price={el.price} isArchive={el.isArchive} />))}
            </div>
        </div>
    )
}

export default Main
