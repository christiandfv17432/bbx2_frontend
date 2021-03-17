import { createStore,combineReducers } from "redux";
import { itemListReducer } from "../reducers/itemListReducer";

const reducers = combineReducers({
     itemListReducer
})

export const store = createStore(reducers,{itemsReducer:{items:[]}},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());