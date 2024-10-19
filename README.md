# Task Management App

**Description**
The Task Management App allows users to create, edit, delete, and manage their tasks efficiently. You can assign a priority level to each task (high, medium, low) and mark tasks as completed or pending. The app features a user-friendly interface with responsive design, making it easy to use on any device.

**Features**
*Add New Tasks*: Create tasks with a title, description, and priority.
*Edit Tasks*: Update existing tasks, except for those marked as completed.
*Delete Tasks*: Remove tasks from the list.
*Toggle Completion*: Mark tasks as completed or pending.
*Sort Tasks*: Tasks are sorted dynamically by priority, ensuring high-priority tasks appear at the top.

**Sorting Tasks by Priority**
Tasks are sorted using a simple approach where we define an order for the priority levels. We assign a numeric value to each priority:

High: 1
Medium: 2
Low: 3

**When displaying tasks, we sort them based on these numeric values. This ensures that high-priority tasks are always listed first, followed by medium and low-priority tasks.**

 # Setup Instructions
 
To set up and run the Task Management App on your local machine, follow these steps:

**Clone the Repository:**

`git clone <repository-url>
cd task-management-app `

Install Dependencies: Make sure you have Node.js installed. Then, run:

`npm install`

Run the Development Server:

npm run dev

**Open in Browser: Visit http://localhost:3000 in your web browser to view the app.**

# Technologies Used
Next.js for server-side rendering and routing
React for building the user interface
CSS for styling

# Live Demo

Check out the live version of the app [here](https://task-management-app-psi-roan.vercel.app).
