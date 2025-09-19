
import { createSlice } from '@reduxjs/toolkit';

// Get initial tasks from localStorage if available
const getInitialTasks = () => {
  if (typeof window !== 'undefined') {
    const savedTasks = localStorage.getItem('teamPulseTasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
  }
  return [
    { id: 1, memberId: 1, title: 'Complete Dashboard', dueDate: '2023-06-15', progress: 50, completed: false },
    { id: 2, memberId: 2, title: 'Fix UI Bugs', dueDate: '2023-06-10', progress: 80, completed: false },
    { id: 3, memberId: 1, title: 'Write Documentation', dueDate: '2023-06-20', progress: 30, completed: false },
  ];
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getInitialTasks()
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
        id: Math.max(0, ...state.tasks.map(t => t.id)) + 1,
        progress: 0,
        completed: false
      };
      state.tasks.push(newTask);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('teamPulseTasks', JSON.stringify(state.tasks));
      }
    },
    updateProgress: (state, action) => {
      const { taskId, progress } = action.payload;
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        task.progress = Math.min(100, Math.max(0, progress));
        task.completed = task.progress === 100;
        
        // Save to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('teamPulseTasks', JSON.stringify(state.tasks));
        }
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('teamPulseTasks', JSON.stringify(state.tasks));
      }
    }
  }
});

export const { addTask, updateProgress, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;