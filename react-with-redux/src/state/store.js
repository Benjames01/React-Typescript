import { legacy_createStore  as configureStore } from "redux";
import reducers from "./reducers";

export const store = configureStore(
    reducers, {}
    );

