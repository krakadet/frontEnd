/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import { isLoggedIn } from '../../helpers';
// import notFound from '../not-found';
import Home from './Home';
import Layout from '../../components/Layout';
import AddPersonForm from "./FormPerson/addPeronForm/AddPersonForm";
import onSubmit from './FormPerson/addPeronForm/showResults'
import FieldLevelValidationForm from './exapmle'

async function action(/* context */) {
  // const { store , params, fetch } = context;

  // const state = store.getState();
  //
  // if (!isLoggedIn(state.auth)) {
  //   // forbid access for not authorized users
  //   return notFound();
  // }

  //  server side rendering, component will be mounted after we get data from api, user will see page already rendered, SEO spider will have source code before page is loaded
  // The same logic as there src/store/middleware/clientMiddleware.js
  // const courseId = //
  //   params.courseId &&
  //   params.courseId &&
  //   /^[0-9a-fA-F]{24}$/.test(params.courseId)
  //     ? params.courseId
  //     : '';
  //
  // await store.dispatch(reset());
  // if (courseId) {
  //   await store.dispatch({
  //     type: getCourse(courseId).types[0],
  //   });
  //
  //   try {
  //     const res = await getCourse(courseId).promise(fetch);
  //
  //     const resText = await res.text();
  //
  //     const json = resText ? JSON.parse(resText) : {};
  //
  //     if (res.status !== 200) {
  //       if ([403, 404].includes(res.status)) {
  //         return notFound();
  //       }
  //
  //       await store.dispatch({
  //         error: json,
  //         type: getCourse(courseId).types[2],
  //       });
  //     } else {
  //       const result = {
  //         status: res.status,
  //         json,
  //       };
  //
  //       await store.dispatch({
  //         result,
  //         type: getCourse(courseId).types[1],
  //       });
  //     }
  //   } catch (error) {
  //     console.error('MIDDLEWARE ERROR:', error);
  //     await store.dispatch({
  //       error,
  //       type: getCourse(courseId).types[2],
  //     });
  //   }
  // }

  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <Layout>

        <FieldLevelValidationForm />
      </Layout>
    ),
  };
}

export default action;
