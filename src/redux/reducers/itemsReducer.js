import { ADD_ITEM, DELETE_ITEM, FAVORITE_ITEM } from "../types/types"

const initialState = {
    items: []
}


const items = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }
        case FAVORITE_ITEM:
            return {
                ...state,
                items:state.items.map((item)=>{
                    if(item.id===action.payload)
                    {
                        return {...item, isFavorite:!item.isFavorite}
                    }
                    return {...item}
                })
            }

        default:
            return state;
    }
}
export default items;