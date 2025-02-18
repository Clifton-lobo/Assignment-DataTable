import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = tableSlice.actions;
export default tableSlice.reducer;
