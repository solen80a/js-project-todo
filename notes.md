https://coolors.co/palette/000000-14213d-fca311-e5e5e5-ffffff

Learning & Preparation
[x] Review useContext API in React
[x] Review Zustand state management library
[x] Understand the concept of global state vs. prop drilling
[x] Fork and clone the provided repository
[x] Attend/prepare for Tuesday’s live session

Planning Tasks
[x] Sketch app UI and layout
[x] Break UI into reusable components
[x] Define the data structure for a task (e.g., id, text, isCompleted, createdAt, dueDate, category, etc.)
[x] Design the structure of the Zustand store

Core Development Tasks
[x] Set up Zustand store
[x] Create global state with task list
[] Define actions: 
  [x] addTask, 
  [x] removeTask, 
  [] toggleTaskCompletion
[x] Build base components
[x] Task List
[x] Task Item
[x] Add Task Form
[] Task Counter
[] Implement core features
  [x] Add new tasks
  [x] Display all tasks (completed and uncompleted)
  [] Toggle task completion status
  [x] Remove tasks
  [] Show count of tasks (total or uncompleted)

UI/UX Tasks
[] Style the app (clean and simple design)
[] Implement empty states design
[] Make the app responsive (320px to 1600px)

Accessibility & Performance
[] Ensure all images have alt attributes
[] Check color contrast for accessibility
[] Achieve ≥ 95 score on Lighthouse audit
[] Follow clean code best practices

Stretch Goals (Optional but Recommended)
[] Add task creation timestamps
[] Format and display timestamps (use date-fns or Moment.js)
[] Add "Complete All" button
[x] Implement dark/light mode toggle !!See the Thuesday practice starter-code!!
[] Use localStorage for persistence
[] Add due date input for tasks
[] Display due date
[] Highlight overdue tasks
[] Add filters (e.g., completed/uncompleted, by date)
[] Implement task categories or tags
[] Create and manage project groups of tasks
[] Mark project as complete when all tasks are done

Development Tips
[] Start small: begin with hardcoded task list and toggle functionality
[] Gradually add complexity: build up to dynamic task addition/removal
[] Test your store logic separately before UI integration
[] Commit often, test early