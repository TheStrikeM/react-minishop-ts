interface ITotals {
    totalPrice: number,
    totalCount: number
}

interface IInitialState extends ITotals {
    items: Array<{
        id: number,
        name: string,
        price: number,
        grams: number,
        isArchive: boolean,
    }>
}

const initialState: IInitialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

export default (state = initialState, {type, payload}: any) => {
    switch (type) {

    case "ADD_ITEM":
        return { 
            ...state,
            items: [...state.items, payload],
            totalCount: state.totalCount + 1,
            totalPrice: state.totalPrice + payload.price
        }

    default:
        return state
    }
}
