"use client";

import { useState, useEffect } from 'react';
import tasksData from '../data/tasks';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import styles from './page.module.css';

const sortTasks = (tasks) => {
  return tasks.sort((a, b) => {
    const priorities = { high: 1, medium: 2, low: 3 };
    return priorities[a.priority] - priorities[b.priority];
  });
};

export default function HomePage() {
  const [tasks, setTasks] = useState(tasksData);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || tasksData;
    setTasks(sortTasks(storedTasks));
  }, []);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(sortTasks(updatedTasks));
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setCurrentTask(taskToEdit);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(sortTasks(updatedTasks));
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    resetTask();
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(sortTasks(updatedTasks));
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(sortTasks(updatedTasks));
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const resetTask = () => {
    setCurrentTask(null);
  };

  return (
    <div className={styles.container}>
      <h1>Task Management App</h1>
      <TaskForm 
        addTask={addTask} 
        currentTask={currentTask} 
        updateTask={updateTask} 
        resetTask={resetTask} 
      />
      <TaskList 
        tasks={tasks} 
        editTask={editTask} 
        deleteTask={deleteTask} 
        toggleCompleted={toggleCompleted} 
      />
    </div>
  );
}
