import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentUser {
  id: string
  name: string
  email: string
  role: string
}

const initialState: CurrentUser = {
  id: '',
  name: '',
  email: '',
  role: ''
}

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      const { id, name, email, role } = action.payload
      return state = {
        id,
        name,
        email,
        role
      }
    },
    resetCurrentUser: () => initialState
  }
})

export const { updateCurrentUser } = userSlice.actions
export default userSlice.reducer
