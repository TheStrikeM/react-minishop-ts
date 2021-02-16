interface IPayload {
    id: number,
    name: string,
    price: number,
    grams: number,
    isArchive: boolean,
}

export const addItem = (payload: IPayload) => ({
    type: "ADD_ITEM",
    payload: payload
})

export const removeItem = (payload: string) => ({
    type: "REMOVE_ITEM",
    payload: payload
})