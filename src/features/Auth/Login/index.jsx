import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm/index';
import { login } from '../userSlice';

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      //hàm này sẽ handle error
      unwrapResult(resultAction);
      //làm gì tiếp khi thành công ? redirect qua trang home :D
      // enqueueSnackbar('Đăng nhập thành công', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
