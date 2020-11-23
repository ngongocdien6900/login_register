const { createSlice } = require("features/Auth/Login/@reduxjs/toolkit");



const chatSlice = createSlice({
    name: 'chat',
    initialState: [],
    reducers: {
        sendMessage: (state, action) => {
            const newMessage = action.payload;
            state.push(newMessage);
        }
    }
})


const { reducer, actions } = chatSlice
export const { sendMessage } = actions;
export default reducer;