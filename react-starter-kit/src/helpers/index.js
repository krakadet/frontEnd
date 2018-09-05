import _ from 'lodash';

export const buildQuery = params =>
  Object.keys(params)
    .reduce((a, k) => {
      if (!_.isEmpty(k) && params[k] !== undefined) {
        a.push(`${k}=${encodeURIComponent(params[k])}`);
      }

      return a;
    }, [])
    .join('&');

export const isLoggedIn = user => !!(user && user.user && user.user.id);
