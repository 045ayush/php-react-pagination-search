# Frontend - task-6

Modern React Application with professional UI and responsive design.

## Overview

A modern React frontend application featuring real-time search, smart pagination, and responsive design. Built with React 18 functional components and hooks.

## Features

- **Real-time Search**: Debounced search with instant results
- **Responsive Design**: Mobile-first approach with modern UI
- **Performance**: Optimized rendering and API calls
- **Professional UI**: Clean, modern interface
- **Error Handling**: Comprehensive error states
- **Accessibility**: WCAG compliant components

## Quick Start

### Prerequisites
- Node.js 14.0+ and npm
- Backend API running on port 8000

### Installation

1. **Navigate to frontend directory:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

4. **Open in browser:**
```
http://localhost:3000
```

## Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## Project Structure

```
src/
├── components/
│   ├── SearchBar.js      # Search input component
│   ├── UserTable.js      # User data table
│   └── Pagination.js     # Pagination controls
├── styles/
│   └── App.css          # Professional styling
├── App.js               # Main application
└── index.js             # Entry point
```

## Configuration

### Environment Variables

Create `.env` file:
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_NAME=task-6
REACT_APP_VERSION=2.0.0
```

## Styling

- **CSS Grid/Flexbox**: Modern layout techniques
- **Responsive Design**: Mobile-first approach
- **CSS Variables**: Consistent theming
- **Animations**: Smooth transitions and loading states

## Production Build

```bash
npm run build
```

Deploy the `build/` directory to:
- Static hosting (Netlify, Vercel)
- CDN (CloudFront, Cloudflare)
- Web server (Apache, Nginx)

## Testing

### Manual Testing Checklist
- [ ] Search functionality
- [ ] Pagination navigation
- [ ] Responsive design
- [ ] Error handling
- [ ] Loading states

---

**Built using React 18**