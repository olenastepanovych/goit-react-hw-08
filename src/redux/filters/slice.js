import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
name: 'filters',
initialState: '',
reducers: {
    setFilter(state, action) {
    return action.payload;
    },
    clearFilter() {
    return '';
    },
},
});

export const { setFilter, clearFilter } = filtersSlice.actions;
export default filtersSlice.reducer;