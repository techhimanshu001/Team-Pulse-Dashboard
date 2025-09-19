import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [
    { id: 1, name: 'John Doe', status: 'Working' },
    { id: 2, name: 'Jane Smith', status: 'Break' },
    { id: 3, name: 'Bob Johnson', status: 'Meeting' },
    { id: 4, name: 'Alice Williams', status: 'Offline' },
  ]
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      const { memberId, status } = action.payload;
      const member = state.members.find(m => m.id === memberId);
      if (member) {
        member.status = status;
      }
    },
    addMember: (state, action) => {
      state.members.push(action.payload);
    }
  }
});

export const { updateStatus, addMember } = membersSlice.actions;
export default membersSlice.reducer;