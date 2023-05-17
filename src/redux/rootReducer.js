import { combineReducers } from "redux";
import playReducer from "./playReducer";
const rootReducer = combineReducers({
    reducerPlay : playReducer
});
export default rootReducer;