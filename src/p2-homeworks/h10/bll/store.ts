import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from "redux";
import {myThemeReducer, themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    colorTheme: themeReducer,
    myColorTheme: myThemeReducer,
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
