// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)); // debounce is better
//
// export default (values, dispatch, { fetch }) =>
//   sleep(1000).then(() => {
//     if (!values || !values.email) return false;
//
//     return fetch(`/api/auth/is-email-valid?email=${values.email}`, {
//       method: 'GET',
//     })
//       .then(response => response.json())
//       .then(res => {
//         if (res && res.isExist) {
//           /* eslint-disable */
//             throw { email: 'This email is taken' };
//             /* eslint-disable */
//           }
//         });
//   })
