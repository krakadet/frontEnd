
import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { TextField } from 'redux-form-material-ui';
import {
  Field,
  reduxForm,
  // SubmissionError,
  propTypes as reduxFormPropTypes,
} from 'redux-form';
import { withCookies, Cookies } from 'react-cookie';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography/Typography';

import s from './Home.css';
import validate from './validate';

// import history from '../../history';

class Home extends React.Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired,
    ...reduxFormPropTypes,
  };

  static contextTypes = {
    fetch: PropTypes.func,
  };

  // componentDidMount() {
  //   const { getNotifications, auth } = this.props;
  //   if (isLoggedIn(auth)) {
  //     getNotifications(); perform some request from client (without SSR) to get data after component is mounted and page is shown
  //   }
  // }

  submit = () => {
    // const { cookies } = this.props;
    // cookies.remove('token', { path: '/' });
    //
    // return this.context
    //   .fetch('/api/auth/login', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //   })
    //   .catch(err => {
    //     throw new SubmissionError({ _error: err && err.message });
    //   })
    //   .then(res =>
    //     res.json().then(resJson => {
    //       if (!res.ok) {
    //         if (resJson.message) {
    //           throw new SubmissionError({ _error: resJson.message });
    //         }
    //         throw new SubmissionError(resJson);
    //       }
    //       return resJson;
    //     }),
    //   )
    //   .then(token => {
    //     cookies.set('token', token.token, { path: '/' }); //we save token in cookies instead of local storage for correct routing with server side server to prevent log out when user goes from one page to another
    //     history.push('/');
    //   });

  };

  render() {
    const { handleSubmit, submitting, error } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Typography variant="display1">Log In</Typography>
          <form noValidate autoComplete="off">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              margin="dense"
              component={TextField}
              fullWidth
            />
            <Field
              name="password"
              type="password"
              placeholder="Password"
              margin="dense"
              component={TextField}
              fullWidth
            />
            {error && (
              <Typography gutterBottom color="error">
                {error}
              </Typography>
            )}
            <Button
              color="primary"
              type="submit"
              margin="dense"
              size="large"
              onClick={handleSubmit(this.submit)}
              disabled={submitting}
              fullWidth
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const createReduxForm = reduxForm({
  form: 'loginForm',
  validate,
  // asyncValidate
  // asyncBlurFields: ['email'],
});

// const connectRedux = connect(
//   state => ({
//     auth: state.auth,
//     // initialValues: state.notifications.notifications, for edit, content should be loaded before component is mount
//   }),
//   // dispatch =>
//   //   bindActionCreators( --> getNotifications will be wrapped into this.props.dispatch(this.props.getNotifications(...))
//   //     {
//   //       ...notificationsActions,
//   //     },
//   //     dispatch,
//   //   ),
// );

// export default withCookies(connectRedux(createReduxForm(withStyles(s)(Home))));
export default withCookies(createReduxForm(withStyles(s)(Home)));
