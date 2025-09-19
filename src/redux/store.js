import { configureStore } from '@reduxjs/toolkit';
import membersReducer from './slices/memberSlice';
import roleReducer from './slices/roleSlice';
import tasksReducer from './slices/taskSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    members: membersReducer,
    role: roleReducer,
    tasks: tasksReducer,
    theme: themeReducer,
  },
});