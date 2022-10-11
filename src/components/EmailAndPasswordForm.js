import React from 'react'
import PropTypes from 'prop-types'
import { VStack, FormControl, Input, Button, FormErrorMessage } from 'native-base'
import { useFormik, getIn, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Formik } from 'formik/dist'

const buildValidationSchema = (withPasswordConfirmation) =>
  Yup.object({
    email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
    password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
    // Optionally require password confirmation
    ...(withPasswordConfirmation && {
      passwordConfirmation: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    }),
  })

export const EmailAndPasswordForm = ({
  buttonText = 'Create account',
  isLoading,
  onSubmit,
  withPasswordConfirmation = false,
}) => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        ...(withPasswordConfirmation && { passwordConfirmation: '' }),
      },
      validationSchema: buildValidationSchema(withPasswordConfirmation),
      onSubmit,
    })

  return (
    <VStack space={4} alignItems="center" w="100%">
        <FormControl
          isRequired
          isInvalid={getIn(errors, 'email') && getIn(touched, 'email')}
        >
          <FormControl.Label>Email</FormControl.Label>
          
          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            value={values.email}
          />
          <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
          {touched.name && errors.name ? (
            <div className="error-message">{errors.email}</div>
          ): null}
        </FormControl>

      <FormControl
        isRequired
        isInvalid={getIn(errors, 'password') && getIn(touched, 'password')}
      >
        <FormControl.Label>Password</FormControl.Label>
        <Input
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          autoCompleteType="password"
          onBlur={handleBlur('password')}
          onChangeText={handleChange('password')}
          value={values.password}
        />
        <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
      </FormControl>

      {withPasswordConfirmation && (
        <FormControl
          isRequired
          isInvalid={
            getIn(errors, 'passwordConfirmation') &&
            getIn(touched, 'passwordConfirmation')
          }
        >
          <FormControl.Label>Confirm password</FormControl.Label>
          <Input
            autoCapitalize="none"
            secureTextEntry
            autoCorrect={false}
            autoCompleteType="password"
            onBlur={handleBlur('passwordConfirmation')}
            onChangeText={handleChange('passwordConfirmation')}
            value={values.passwordConfirmation}
          />
          <FormControl.ErrorMessage>{errors.passwordConfirmation}</FormControl.ErrorMessage>
        </FormControl>
      )}

      <Button onPress={handleSubmit} isLoading={isLoading}>
        {buttonText}
      </Button>
    </VStack>
  )
}

EmailAndPasswordForm.propTypes = {
  buttonText: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  withPasswordConfirmation: PropTypes.bool,
}