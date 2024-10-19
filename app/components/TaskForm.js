"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/Task.module.css';

const TaskForm = ({ addTask, currentTask, updateTask, resetTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setPriority(currentTask.priority);
    } else {
      resetForm();
    }
  }, [currentTask]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      updateTask({ ...currentTask, title, description, priority });
    } else {
      addTask({ title, description, priority });
    }
    resetForm();
    resetTask();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className={styles.input}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className={styles.textarea}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={styles.select}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit" className={`${styles.button} ${currentTask ? styles.update : styles.add}`}>
        {currentTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
