interface IInitialState = {
    products: Array<{
        
    }>
}

const initialState = {
    products: [],
}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {

    case "SET_PRODUCTS":
        return { ...state, ...payload }

    default:
        return state
    }
}
