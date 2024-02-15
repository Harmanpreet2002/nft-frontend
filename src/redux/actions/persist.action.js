import { createAsyncThunk } from '@reduxjs/toolkit';

export const saveUser = createAsyncThunk(
    'persist/updateState',
    async () => {
        // console.log(PersistReducerAction);

        /** api call if any */
        //   const response = await fetchCount(amount);
        /** returning reponse */
        //   return response.data;
    }
);