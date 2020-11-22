import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from '../userSlice';
import { useSnackbar } from 'notistack';

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      //hàm này sẽ handle error
      unwrapResult(resultAction);
      //làm gì tiếp khi thành công ? redirect qua trang home :D
      enqueueSnackbar('Đăng ký thành công', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
