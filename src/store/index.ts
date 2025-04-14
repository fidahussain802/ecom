import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import cartSlice from './cart';

export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;