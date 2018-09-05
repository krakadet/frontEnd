// import {
//   EDIT_COURSE__GET_COURSE,
//   EDIT_COURSE__GET_COURSE_SUCCESS,
//   EDIT_COURSE_GET_COURSE_FAIL,
//   EDIT_COURSE__RESET_COURSE,
// } from '../constants';
//
// const initialState = {
//   loading: false,
//   course: { // user for initialValues when user want to create a new form
//     access: 'private',
//     studyTimeEstimationHours: 0,
//     studyTimeEstimationMinutes: 30,
//     accessGroups: [],
//   },
// };
//
// export default function editCourse(state = initialState, action) {
//   switch (action.type) {
//     case EDIT_COURSE__GET_COURSE:
//       return {
//         ...state,
//         loading: true,
//       };
//     case EDIT_COURSE__GET_COURSE_SUCCESS: {
//       return {
//         ...state,
//         course: action.result.json,
//         loading: false,
//       };
//     }
//     case EDIT_COURSE_GET_COURSE_FAIL:
//       return {
//         ...state,
//         loading: false,
//       };
//     case EDIT_COURSE__RESET_COURSE: // can be called in componentWillUnmount() when user leaves page with form / smth else where this data is used
//       return initialState;
//     default:
//       return state;
//   }
// }
