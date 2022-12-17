import {
    FETCH_PROJECTS_FULFILLED,
    FETCH_PROJECTS_REJECTED,
    FETCH_PROJECTS_PENDING
} from "./constants";
import { FULFILLED, REJECTED, PASSIVE, PENDING } from "./status";
export default (data = {
    status: PASSIVE,
    list: []
}, action) => {
    switch (action.type) {
        case FETCH_PROJECTS_PENDING:
            console.log("🚀 -- file: projectReducer.js:9 -- FETCH_PROJECTS_PENDING", FETCH_PROJECTS_PENDING);

            return {
                ...data,
                status: PENDING,
            }
        case FETCH_PROJECTS_FULFILLED:
            console.log("🚀 -- file: projectReducer.js:16 -- FETCH_PROJECTS_FULFILLED", FETCH_PROJECTS_FULFILLED);

            return {
                ...data,
                status: FULFILLED,
                list: [...action.payload],
            }
        case FETCH_PROJECTS_REJECTED:
            console.log("🚀 -- file: projectReducer.js:31 -- FETCH_PROJECTS_REJECTED", FETCH_PROJECTS_REJECTED);

            return {
                ...data,
                status: REJECTED,
            }
        default:
            return data
    }

}