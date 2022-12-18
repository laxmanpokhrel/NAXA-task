import { takeEvery, put } from "redux-saga/effects"
import {
    FETCH_PROJECTS,
    FETCH_PROJECTS_PENDING,
    FETCH_PROJECTS_REJECTED,
    FETCH_PROJECTS_FULFILLED,
} from "./constants"

import API from "../API"

function* projectSaga() {
    yield takeEvery(FETCH_PROJECTS, function* () {
        yield put({
            type: FETCH_PROJECTS_PENDING,
        })
        try {
            const projects = yield API.get("/projects")
            const data = projects.data
            yield put({
                type: FETCH_PROJECTS_FULFILLED,
                payload: data
            })
        } catch (err) {
            yield put({
                type: FETCH_PROJECTS_REJECTED,
            })
        }

    })
}
export default projectSaga