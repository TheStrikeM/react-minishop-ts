interface IInitialState {
    products: Array<{
        id: number,
        name: string,
        price: number,
        isArchive: boolean,
    }>,
    isLoading: boolean
}

const initialState: IInitialState = {
    products: [],
    isLoading: false
}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {

    case "SET_PRODUCTS":
        return { 
            ...state, 
            products: [...state.products + payload],
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
