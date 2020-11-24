import { Container } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import RegisterForm from 'features/Auth/RegisterForm';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

RegisterPage.propTypes = {};

function RegisterPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      //hàm này sẽ handle error
      unwrapResult(resultAction);
      history.push('/auth/login');
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <RegisterForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default RegisterPage;
