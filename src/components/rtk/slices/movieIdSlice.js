import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchMoviesId = createAsyncThunk(
  "fetchMoviesId/moviesIdSlice",
  async (id) => {
    const res = await fetch(`http://localhost:9000/films/${id}`);
    const data = await res.json();
    return data;
  }
);
const moviesIdSlice = createSlice({
  initialState: [],
  name: "moviesIdSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesId.fulfilled, (state, action) => {
      return [action.payload];
    });
  },
});
export const {} = moviesIdSlice.actions;
export default moviesIdSlice.reducer;
