
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/slices/taskSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members.members);
  const [formData, setFormData] = useState({
    memberId: '',
    title: '',
    dueDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.memberId && formData.title && formData.dueDate) {
      dispatch(addTask({
        memberId: parseInt(formData.memberId),
        title: formData.title,
        dueDate: formData.dueDate
      }));
      setFormData({ memberId: '', title: '', dueDate: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="task-form">
      <h3>Assign New Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Team Member:</label>
          <select 
            name="memberId" 
            value={formData.memberId} 
            onChange={handleChange} 
            required
          >
            <option value="">Select a member</option>
            {members.map(member => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Task Title:</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
            placeholder="Enter task title"
          />
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input 
            type="date" 
            name="dueDate" 
            value={formData.dueDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
};

export default TaskForm;