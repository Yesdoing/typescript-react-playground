import { systemReducer } from './system/reducers';
import thunkMiddleware from 'redux-thunk';
import { chatReducer } from './chat/reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from 'redux';


const rootReducer = combineReducers({
    system: systemReducer,
    chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancer)
    );

    return store;
}