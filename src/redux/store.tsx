import { combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers ({
    jobs: jobsReducer,


})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer)