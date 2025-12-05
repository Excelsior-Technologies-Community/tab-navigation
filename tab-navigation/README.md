# Tab Navigation Demo (React + Vite)

## Overview

- This is a simple React application created with Vite that demonstrates a basic Tab Navigation system using React state and conditional rendering.
- Users can switch between different content tabs by clicking on buttons (Home, About, Contact), and the corresponding content will be displayed.

## Features

- Built with React and Vite
- Tab navigation using `useState` for controlling active tab
- Conditional rendering of tab content
- Easy to understand and extend
- Clean, minimal styling with CSS

![Tab Navigation UI](./src/assets/tab%20navigation1.png)
![Tab Navigation UI](./src/assets/tab%20navigation2.png)
![Tab Navigation UI](./src/assets/tab%20navigation3.png)


## Project Structure

my-tab-nav/
├── index.html
├── package.json
├── src/
│ ├── main.jsx
│ ├── App.jsx
│ ├── index.css
│ └── App.css
└── README.md

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm (or yarn)

### Installation & Running Locally

1. Clone or download this repository.
2. Open terminal and navigate to project folder:
    cd my-tab-nav
3. Install dependencies:
    npm install
4. Start the development server:
    npm run dev
5. Open your browser and navigate to:
http://localhost:5173

## Usage

- Click on different tabs (Home, About, Contact) to view the respective content.
- You can add more tabs by adding more buttons in App.jsx and rendering corresponding content conditionally.
- Feel free to enhance styling (App.css) or extend the logic (e.g. animations, dynamic content, more complex components).


## Customization & Extensions

- Add more tabs (e.g. Services, Profile, Settings)
- Use icons along with tab labels
- Add transition/animation when switching tabs
- Use more complex components in place of simple <p> content (e.g. forms, lists, nested components)
- Use context or routing instead of basic state for larger apps

# License
This project is open-source and free to use. Feel free to modify and extend as you like.