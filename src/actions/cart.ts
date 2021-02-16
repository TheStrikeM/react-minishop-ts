interface IPayload {
    name: string,
    price: number,
    isArchive: boolean,
}

export const addItem = (payload: IPayload) => ({
    type: "ADD_ITEM",
    payload: payload
})

export const removeItem = ({name, price, isArchive}: IPayload) => ({
    type: "REMOVE_ITEM",
    payload: {
        name,
        price,
        isArchive
    }
})