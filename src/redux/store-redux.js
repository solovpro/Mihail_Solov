import {combineReducers, createStore} from 'redux';
import booksReducer from "./books-reducer";
import newsReducer from "./news-reducer";
import videosReducer from "./videos-reducer";
import mainReducer from "./main-reducer";

let reducers = combineReducers({
    booksPage: booksReducer,
    newsPage: newsReducer,
    videosPage: videosReducer,
    mainPage: mainReducer
});

const store = createStore(reducers);

export default store;