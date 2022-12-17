import { FETCH_PROJECTS } from "./constants";

export const fetchProjects = (data) => {
    return {
        type: FETCH_PROJECTS,
        payload: data
    }
}