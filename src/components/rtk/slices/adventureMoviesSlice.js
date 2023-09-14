import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchadventureMovies = createAsyncThunk(
  "adventureMovies/fetchadventureMovies",
  async () => {
    const res = await fetch("http://localhost:9000/Adventure");
    const data = await res.json();
    return data;
  }
);
const adventureMovies = createSlice({
  initialState: [],
  name: "adventureMovies",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchadventureMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = adventureMovies.actions;
export default adventureMovies.reducer;
