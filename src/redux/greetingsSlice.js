import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://127.0.0.1:3000/api/v1/messages';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data.data.greeting, "check")
    return data.data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { data: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default greetingSlice.reducer;