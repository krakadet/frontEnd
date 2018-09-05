// import {
//   GET_NOTIFICATIONS,
//   GET_NOTIFICATIONS_SUCCESS,
//   GET_NOTIFICATIONS_FAIL,
//   RESET_NOTIFICATIONS,
// } from '../constants';
//
// const initialState = { loading: false, notifications: [], total: 0 };
//
// export default function notifications(state = initialState, action) {
//   switch (action.type) {
//     case GET_NOTIFICATIONS:
//       return {
//         ...state,
//         loading: true,
//       };
//     case GET_NOTIFICATIONS_SUCCESS:
//       return {
//         ...state,
//         notifications: action.result.json,
//         total: action.result.total, src/store/middleware/clientMiddleware.js:26
//         loading: false,
//       };
//     case GET_NOTIFICATIONS_FAIL:
//       return {
//         ...state,
//         error: action.error,
//         loading: false,
//       };
//     case RESET_NOTIFICATIONS:
//       return initialState;
//     default:
//       return state;
//   }
// }
