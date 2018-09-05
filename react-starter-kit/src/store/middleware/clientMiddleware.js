export default function clientMiddleware(client) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });

    const actionPromise = promise(client);
    actionPromise
      .then(
        async res => {
          const resText = await res.text();
          const json = resText ? JSON.parse(resText) : {};
          if (res.status >= 400) {
            next({ ...rest, error: json, type: FAILURE });
          } else {
            const result = {
              status: res.status,
              total: Number.parseInt(res.headers.get('x-total-count'), 10) || 0,
              json,
            };

            next({ ...rest, result, type: SUCCESS });
          }
        },
        error => next({ ...rest, error, type: FAILURE }),
      )
      .catch(error => {
        console.error('MIDDLEWARE ERROR:', error);
        next({ ...rest, error, type: FAILURE });
      });

    return actionPromise;
  };
}
