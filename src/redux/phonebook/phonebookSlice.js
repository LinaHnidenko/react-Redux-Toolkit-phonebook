import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { phonebookInitialState } from './phonebookInitialState';
import { deletePhonebookThunk, getPhonebookThunk } from './phonebookThunk';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilledGet = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = action.payload;
  state.contacts.error = null;
};

const handleFulfilledDelete = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.items = action.payload;
  state.contacts.error = null;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitialState,
  extraReducers: builder => {
    builder
      // .addCase(getPhonebookThunk.pending, handlePending)
      .addCase(getPhonebookThunk.fulfilled, handleFulfilledGet)
      // .addCase(getPhonebookThunk.rejected, handleRejected)
      // .addCase(deletePhonebookThunk.pending, handlePending)
      .addCase(deletePhonebookThunk.fulfilled, handleFulfilledDelete)
      // .addCase(deletePhonebookThunk.rejected, handleRejected)
      .addMatcher(
        isAnyOf(getPhonebookThunk.pending, deletePhonebookThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getPhonebookThunk.rejected, deletePhonebookThunk.rejected),
        handleRejected
      );
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { setContacts, setFilter } = phonebookSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';
// import { phonebookInitialState } from './phonebookInitialState';

// export const phonebookSlice = createSlice({
//   name: 'phonebook',
//   initialState: phonebookInitialState,
//   reducers: {
//     setContacts: (state, action) => {
//       state.contacts = action.payload;
//     },
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const phonebookReducer = phonebookSlice.reducer;
// export const { setContacts, setFilter } = phonebookSlice.actions;
