import axios from 'axios';

import { SUCCESS } from 'app/shared/reducers/action-type.util';

export const ACTION_TYPES = {
  GET_COURSES: 'course/GET_COURSES',
  CLEAR_COURSES: 'course/CLEAR_COURSES',
  DELETE_COURSE: 'course/DELETE_COURSE',
  ADD_COURSE: 'course/ADD_COURSE',
  UPDATE_COURSE: 'course/UPDATE_COURSE'
};

const initialState = {
  courses: []
};

export type ApplicationCourseState = Readonly<typeof initialState>;

export default (state: ApplicationCourseState = initialState, action): ApplicationCourseState => {
  switch (action.type) {
    case SUCCESS(ACTION_TYPES.GET_COURSES):
      return {
        ...state,
        courses: action.payload.data
      };
    case ACTION_TYPES.DELETE_COURSE:
      return state;
    case ACTION_TYPES.ADD_COURSE:
      return state;
    case ACTION_TYPES.UPDATE_COURSE:
      return state;
    case ACTION_TYPES.CLEAR_COURSES:
      let newState = { ...state };
      delete newState.courses;
      return {
        ...newState
      };
    default:
      return state;
  }
};

export const getCourses = () => dispatch =>
  dispatch({
    type: ACTION_TYPES.GET_COURSES,
    payload: axios.get('api/course/findAllCoursesWithTNDto')
  });
export const DeleteCourse = courseName => dispatch =>
  dispatch({
    type: ACTION_TYPES.DELETE_COURSE,
    payload: axios.delete('api/course/deleteCourse/' + courseName)
  });
export const AddCourse = course => dispatch =>
  dispatch({
    type: ACTION_TYPES.ADD_COURSE,
    payload: axios.post('/api/course/addCourse', course)
  });
export const UpdateCourse = course => dispatch =>
  dispatch({
    type: ACTION_TYPES.UPDATE_COURSE,
    payload: axios.put('/api/course/updateCourse', course)
  });

export const clearCourses = () => dispatch =>
  dispatch({
    type: ACTION_TYPES.CLEAR_COURSES
  });
