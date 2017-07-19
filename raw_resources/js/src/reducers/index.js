import { combineReducers } from "redux";

import mainMenuItems from "./mainMenuItemsReducer";
import content from "./contentReducer";

export default combineReducers({
    mainMenuItems,
    content
});