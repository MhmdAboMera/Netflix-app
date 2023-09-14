import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchdramaMovies = createAsyncThunk(
  "dramaMovies/fetchdramaMovies",
  async () => {
    const res = await fetch("http://localhost:9000/Drama");
    const data = await res.json();
    return data;
  }
);
const dramaMovies = createSlice({
  initialState: [],
  name: "dramaMovies",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchdramaMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = dramaMovies.actions;
export default dramaMovies.reducer;
