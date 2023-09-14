import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchhorrorMovies = createAsyncThunk(
  "horrorMovies/fetchhorrorMovies",
  async () => {
    const res = await fetch("http://localhost:9000/Horror");
    const data = await res.json();
    return data;
  }
);
const horrorMovies = createSlice({
  initialState: [],
  name: "horrorMovies",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchhorrorMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = horrorMovies.actions;
export default horrorMovies.reducer;
