import itemsAPI from "../../api"
import { ADD_ITEM, DELETE_ITEM, FAVORITE_ITEM } from "../types/types"

const addNewItem = (obj) => {
    return {
        type: ADD_ITEM,
        payload: obj
    }
}

const deleteItemBy = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

const isFavoriteBy = (id) => {
    return {
        type: FAVORITE_ITEM,
        payload: id
    }
}


export const fetchItems = () => async (dispatch) => {
    const response = await itemsAPI.getItems();
    for (let key in response.data) {
            dispatch(addNewItem(response.data[key]));
    }
}

export const addItem = (obj) => async (dispatch) => {
    await itemsAPI.addItem(obj);
    dispatch(addNewItem(obj));
}

export const deleteItem = (id) => async (dispatch) => {
    await itemsAPI.deleteItem(id)
    dispatch(deleteItemBy(id));
}

export const isFavorite = (obj) => async (dispatch) => {
    await itemsAPI.updateItem(obj);
    dispatch(isFavoriteBy(obj.id))
}