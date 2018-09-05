import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from "prop-types";

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue13 = minValue(13)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooYoung = value =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
const minValue10 = minValue(10)
const password = value =>
  value < 8 && value > 15
    ? 'You need the minimum 6 or maximum 15 values!'
    : undefined;
const lessThen10 = value =>
  value && value < 10
    ? 'You do not meet the minimum age requirement!'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

const renderField = ({
                       input,
                       label,
                       type,
                       meta: { touched, error, warning }
                     }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
)


class FieldLevelValidationForm extends React.Component {

  static contextTypes = {
    fetch: PropTypes.func,
  };
   submit = (data) => {
    console.log('---data', data);
     console.log('---this.context.fetch', this.context.fetch);
    // const { cookies } = this.props;
    // cookies.remove('token', { path: '/' });
    //
    return this.context
      .fetch('/api/person', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      .catch(err => {
        throw new SubmissionError({ _error: err && err.message });
      })
      .then(res =>
        res.json().then(resJson => {
          if (!res.ok) {
            if (resJson.message) {
              throw new SubmissionError({ _error: resJson.message });
            }
            throw new SubmissionError(resJson);
          }
          return resJson;
        }),
      )
      .then(console.log);
    //   });
  };

render (){
  const { handleSubmit, pristine, reset, submitting } = this.props;
return (
    <form onSubmit={handleSubmit(this.submit)}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Lastname"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        validate={[required, maxLength15, minLength2]}
        warn={password}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={email}
        warn={aol}
      />
      <Field
        name="IPN"
        type="number"
        component={renderField}
        label="IPN"
        validate={[required, number, minValue10]}
        warn={lessThen10}
      />
      <Field
        name="phone"
        type="number"
        component={renderField}
        label="Phone number"
        validate={[required, phoneNumber]}
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
  }
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)
