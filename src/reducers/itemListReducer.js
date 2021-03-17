import { types } from "../types/types";


    export const itemListReducer = (state ={}, action) => {

        switch (action) {
            case types.items:

                return {
                    ...state,
                    items: action.payload.items
                }
        
            default:
                return state;
        }


    }