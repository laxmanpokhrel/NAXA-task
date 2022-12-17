import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./rootReducer"
import projectSaga from "./projectSaga";
const sagaMiddleware = createSagaMiddleware()
export default configureStore({
    reducer,
    middleware: () => [sagaMiddleware]
})
sagaMiddleware.run(projectSaga);