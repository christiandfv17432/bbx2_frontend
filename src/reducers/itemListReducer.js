import { types } from "../types/types";


    export const itemListReducer = (state ={}, action) => {

        switch (action.type) {
            case types.items:

                return {
                    ...state,
                    items: action.payload.items
                }
            case types.detail:
            return {
                ...state,
                detail: action.payload.detail
            }
                
        
            default:
                return state;
        }


    }