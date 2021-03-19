import{createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import { itemListReducer } from "../reducers/itemListReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
     itemListReducer
})

export const store = createStore(reducers,{itemListReducer:{items:[]}},
     composeEnhancers(
         applyMiddleware(thunk) 
     )
 );