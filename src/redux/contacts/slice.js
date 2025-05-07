import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, editContact } from './operations';

const contactsSlice = createSlice({
name: 'contacts',
initialState: {
    items: [],
    isLoading: false,
    error: null,
},
extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(c => c.id !== action.payload);
    })
    .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(c => c.id === action.payload.id);
        if (index !== -1) {
        state.items[index] = action.payload;
        }
    });
},
});

export default contactsSlice.reducer;