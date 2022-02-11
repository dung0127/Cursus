import { combineReducers } from "redux";
import { authReducer } from './auth';
import { detailReducer} from './detail';
import { userReducer } from "./user";
import { catalogReducer } from "./catalog";
import { subCatalogReducer } from "./subCatalog";
import { courseReducer } from "./course"

export const rootReducer = combineReducers({
    auth: authReducer,
    detail: detailReducer,
    user: userReducer,
    catalog: catalogReducer,
    subCatalog: subCatalogReducer,
    course: courseReducer,
});