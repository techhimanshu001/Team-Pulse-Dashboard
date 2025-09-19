# Team Pulse Dashboard

A productivity monitoring tool for internal teams with role-based views. Team Leads can monitor member statuses and assign tasks, while Team Members can update their status and manage task progress.

## Features

- **Role Switching**: Toggle between Team Lead and Team Member views
- **Status Updates**: Members can update their working status (Working, Break, Meeting, Offline)
- **Task Management**: Leads can assign tasks, members can update progress
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Built with Tailwind CSS for all screen sizes

## Tech Stack

- React with Hooks
- Redux Toolkit for state management
- Tailwind CSS with dark mode support
- Chart.js for visualizations (optional)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Team-Pulse-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Usage

### As a Team Member
- Use the status buttons to update your current status
- View your assigned tasks and update progress using +/- buttons

### As a Team Lead
- View team status summary and individual member statuses
- Assign new tasks using the task form
- Filter team members by status

### Toggle Dark Mode
- Use the sun/moon icon in the top-right to switch between light and dark themes

## Project Structure

```
src/
├── components/          # React components
├── redux/
│   ├── slices/         # Redux Toolkit slices
│   └── store.js        # Redux store configuration
├── App.js              # Main application component
|-- App.css
|-- index.css           
└── index.js           # Application entry point
```

## Redux State Management

The application uses Redux Toolkit with three main slices:

- **`roleSlice`**: Manages current user role and user information
- **`membersSlice`**: Manages team member data and statuses
- **`tasksSlice`**: Manages task assignment and progress tracking

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Made with ❤️ for better team productivity**
