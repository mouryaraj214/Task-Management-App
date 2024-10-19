"use client";

import styles from '../styles/Task.module.css';

const TaskItem = ({ task, editTask, deleteTask, toggleCompleted }) => {
  return (
    <div className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`} style={{ borderColor: task.priority === 'high' ? '#dc3545' : task.priority === 'medium' ? '#ffc107' : '#28a745' }}>
      <h3 className={styles.taskTitle}>{task.title}</h3>
      <p className={styles.taskDescription}>{task.description}</p>
      <span className={`${styles.taskPriority} ${task.priority}`}>Priority: {task.priority}</span>
      <div className={styles.buttons}>
        <button onClick={() => toggleCompleted(task.id)} className={`${styles.button} ${task.completed ? styles.pending : styles.completed}`}>
          Mark as {task.completed ? 'Pending' : 'Completed'}
        </button>
        <button onClick={() => editTask(task.id)} className={`${styles.button} ${styles.edit}`} disabled={task.completed}>
          Edit
        </button>
        <button onClick={() => deleteTask(task.id)} className={`${styles.button} ${styles.delete}`}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
