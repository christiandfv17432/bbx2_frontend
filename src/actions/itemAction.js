import { types } from "../types/types"

export const list = (items) =>({
   
        type: types.items,
        payload:{
            items,
        }
    
})