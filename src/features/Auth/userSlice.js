import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

//payload là tham số user truyền vào ở form
export const register = createAsyncThunk('user/register', async (payload) => {
  //call api to register
  const data = await userApi.register(payload);

  //save data to localStorage
  // localStorage.setItem('access_token', data.token);
  // localStorage.setItem('user', JSON.stringify(data.user));

  //return data
  return data.user;
});


//payload là tham số user truyền vào ở form
export const login = createAsyncThunk('user/login', async (payload) => {
  //call api to register
  const data = await userApi.login(payload);

  //save data to localStorage
  localStorage.setItem('access_token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));

  //return data
  return data.user;
});


const userSlice = createSlice({
  name: 'user',
  initialState: {
    //thông tin của thằng user đang đăng nhập
    current: {},
    setting: {},
  },

  //ở đây định nghĩa hàm, tự động tạo ra action type tương ứng
  reducers: {},

  //async action
  //tự định nghĩa ra
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      //action.payload là ở trên return ra
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      //action.payload là ở trên return ra
      state.current = action.payload;
    },
  },
});

// chỉ cần viết reducers ở trên thôi, nó sẽ tự động tạo sẵn cho mình
const { reducer } = userSlice;
export default reducer;
