import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contacts/contactsThunk';
import { contactsInitialState } from 'redux/contacts/initialState';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrayThunk = [createContactsThunk, deleteContactsThunk, getContactsThunk];

const thunkStatus = type => arrayThunk.map(el => el[type]);

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const handleFulfilledGet = (state, action) => {
  state.contacts.items = action.payload;
};

const handleFulfilledCreate = (state, action) => {
  state.contacts.items.push(action.payload);
};

const handleFulfilledDelete = (state, action) => {
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== action.payload.id
  );
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...thunkStatus(STATUS.PENDING)), handlePending)
      .addMatcher(isAnyOf(...thunkStatus(STATUS.FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...thunkStatus(STATUS.REJECTED)), handleRejected);
  },
});

export const contactsReducer = contactSlice.reducer;
