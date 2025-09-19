import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, memberId: 1, title: 'Complete Dashboard', dueDate: '2023-06-15', progress: 50 },
    { id: 2, memberId: 2, title: 'Fix UI Bugs', dueDate: '2023-06-10', progress: 80 },
    { id: 3, memberId: 1, title: 'Write Documentation', dueDate: '2023-06-20', progress: 30 },
  ]
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        id: Math.max(0, ...state.tasks.map(t => t.id)) + 1,
        progress: 0
      });
    },
    updateProgress: (state, action) => {
      const { taskId, progress } = action.payload;
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        task.progress = Math.min(100, Math.max(0, progress));
      }
    }
  }
});

export const { addTask, updateProgress } = tasksSlice.actions;
export default tasksSlice.reducer;