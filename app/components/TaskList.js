"use client";

import TaskItem from './TaskItem';
import { useState } from 'react';
import styles from '../styles/Task.module.css';

const TaskList = ({ tasks, editTask, deleteTask, toggleCompleted }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

 
  const filteredPendingTasks = pendingTasks.filter(
    task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCompletedTasks = completedTasks.filter(
    task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.taskListContainer}>
      
      <input
        type="text"
        placeholder="Search tasks by title or description..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchBar}
      />

     
      <h2>Pending Tasks</h2>
      {filteredPendingTasks.length === 0 ? (
        <p>No pending tasks found.</p>
      ) : (
        filteredPendingTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))
      )}

      
      {filteredCompletedTasks.length > 0 && <h2>Completed Tasks</h2>}
      {filteredCompletedTasks.length === 0 ? (
        <p>No completed tasks found.</p>
      ) : (
        filteredCompletedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
