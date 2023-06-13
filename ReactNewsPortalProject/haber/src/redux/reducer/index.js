import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import categoriesReducer from "./categoriesReducer";


const rootReducer = combineReducers({
   blogReducer,
   changeCategoryReducer,
   categoriesReducer,
});

export default rootReducer;