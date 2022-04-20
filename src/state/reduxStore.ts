import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxstore from './tripSlice';

export const store = configureStore({
    reducer: {
        trip: reduxstore
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;