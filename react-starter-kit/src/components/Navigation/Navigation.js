/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';

// https://github.com/kriasoft/react-starter-kit/blob/master/src/components/Navigation/Navigation.js

class Navigation extends React.Component {
  render() {
    return <div className={s.root} role="navigation" />;
  }
}

/*
logout = async () => {
    const { dispatch } = this.props;
    // logout();
    await dispatch({
      type: logout().types[0],
    });

    try {
      const res = await logout().promise(fetch);

      const resText = await res.text();

      const json = resText ? JSON.parse(resText) : {};

      if (res.status !== 200) {
        await dispatch({
          error: json,
          type: logout().types[2],
        });
      } else {
        const result = {
          status: res.status,
          json,
        };

        await dispatch({
          result,
          type: logout().types[1],
        });
      }
    } catch (error) {
      console.error('MIDDLEWARE ERROR:', error);
      await dispatch({
        error,
        type: logout().types[2],
      });
    }

    this.props.cookies.remove('token', { path: '/' });
    history.replace('/');
  };

  + wrap with connect() with missed second argument
 */

export default withStyles(s)(Navigation);
