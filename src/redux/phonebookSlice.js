import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://connections-api.herokuapp.com/contacts';

export const fetchContactsWithToken = createAsyncThunk(
  'phonebook/fetchContactsWithToken',
  async (_, { getState }) => {
    const token = getState().token;
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (newContact, { getState }) => {
    const token = getState().token;
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newContact),
    });

    const data = await response.json();
    return data;
  }
);

export const removeContact = createAsyncThunk(
  'phonebook/removeContact',
  async (contactId, { getState }) => {
    const token = getState().token;
    const response = await fetch(`${apiUrl}/${contactId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to remove contact');
    }

    return contactId;
  }
);

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    const handlePending = state => {
      state.status = 'loading';
    };

    const handleFulfilled = (state, action) => {
      state.status = 'succeeded';
      state.contacts = action.payload;
    };

    const handleRejected = (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    };

    builder
      .addCase(fetchContactsWithToken.pending, handlePending)
      .addCase(fetchContactsWithToken.fulfilled, handleFulfilled)
      .addCase(fetchContactsWithToken.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(removeContact.rejected, handleRejected);
  },
});

export const { setContacts, setFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;
