import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from './operations';

const actions = [getContacts, deleteContact, addContact];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    extraReducers: builder => {
        builder
            .addCase(getContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                // console.log(state.items);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addMatcher(
                isAnyOf(...actions.map(action => action.pending)),
                state => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                isAnyOf(...actions.map(action => action.rejected)),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            )
            .addMatcher(
                isAnyOf(...actions.map(action => action.fulfilled)),
                state => {
                    state.isLoading = false;
                }
            );
    },
});

export const contactsReducer = contactsSlice.reducer;