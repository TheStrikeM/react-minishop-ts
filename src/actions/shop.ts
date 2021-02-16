import axios from 'axios'

export const fetchItems = (dispatch: any) => {
    dispatch(changeLoading(false))
    
    axios.get("http://localhost:1111/items").then(({ data }) => {
        dispatch(setItems(data))
        dispatch(changeLoading(true))

        console.log("Success data")
    })
}

export const setItems = (payload: Array<{
    id: number,
    name: string,
    price: number,
    isArchive: boolean,
}>) => ({
    type: "SET_PRODUCTS",
    payload: payload
})

export const changeLoading = (payload: boolean) => ({
    type: "CHANGE_LOADING",
    payload: payload
})