import { Container } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import LoginForm from 'features/Auth/LoginForm';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

LoginPage.propTypes = {};

function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      //hàm này sẽ handle error
      unwrapResult(resultAction);
      history.push('/');
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <LoginForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default LoginPage;
