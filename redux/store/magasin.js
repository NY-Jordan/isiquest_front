import { combineReducers } from "redux"
import ExempleReducer from "../reducers/ExempleReducer";

 const RootReducer = 
    combineReducers({
        exemples : ExempleReducer,
});

export default RootReducer;
