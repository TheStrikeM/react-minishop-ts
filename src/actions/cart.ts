interface IPayload {
    name: string,
    price: number,
    isArchive: boolean,
}

export const addItem = (payload: IPayload) => ({
    type: "ADD_ITEM",
    payload: payload
})

export const deleteItem = ({name, price}: {name: string, price: number}) => ({
    type: "DELETE_ITEM",
    payload: {name, price}
})