import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import coffeeReducer from './coffee/coffeeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    coffee: coffeeReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
