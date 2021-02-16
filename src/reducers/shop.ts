const initialState = {
    products: [],
    isLoading: false
}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {

    case "SET_PRODUCTS":
        return { 
            ...state,
            products: payload,
            isLoading: true
        }
    
    case "CHANGE_LOADING":
        return { 
            ...state,
            isLoading: payload
        }

    default:
        return state
    }
}
