import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContacts,
  deleteContacts,
  getContacts,
} from 'components/api/api';

export const getContactsThunk = createAsyncThunk('contacts/get', () => {
  getContacts();
});

export const createContactsThunk = createAsyncThunk(
  'phonebook/create',
  data => {
    createContacts(data);
  }
);
export const deleteContactsThunk = createAsyncThunk('phonebook/delete', id => {
  deleteContacts(id);
});
