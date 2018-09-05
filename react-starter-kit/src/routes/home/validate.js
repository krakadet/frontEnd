export default values => {
  const errors = {};

  if (!values.password || !values.password.trim()) {
    errors.password = 'Required';
  }
  if (!values.email || !values.email.trim()) {
    errors.email = 'Required';
  }
  if (
    values.email &&
    /* eslint-disable */
    !/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(  // eslint-disable-line
      values.email,
    )
  ) {
    errors.email = 'Wrong email format';
  }

  return errors;
};
