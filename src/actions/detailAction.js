import { types } from "../types/types"

export const detailAdd = (detail) =>({
   
        type: types.detail,
        payload:{
            detail,
        }
    
})