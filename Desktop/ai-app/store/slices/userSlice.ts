import { createSlice } from '@reduxjs/toolkit'

const initialState = {
email: '',
password:''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUser: (state, action) => {
        state.email = action.payload.email
        state.password = action.payload.password
    },
    signOutUser:  (state, action) => {
        state.email = ''
        state.password = ''
    }
  }
});

export const {signInUser, signOutUser} = userSlice.actions

export default userSlice.reducer