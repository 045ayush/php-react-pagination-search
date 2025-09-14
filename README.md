# Professional Full Stack Application

A modern, professional full-stack user search application featuring real-time search, pagination, and responsive design. Built with React frontend and PHP REST API backend.

## Features

- **Real-time Search**: Instant search with debounced input
- **Smart Pagination**: Efficient pagination with ellipsis for large datasets
- **Responsive Design**: Mobile-first approach with modern UI
- **Performance Optimized**: Debounced API calls and optimized rendering
- **Error Handling**: Comprehensive error handling and loading states
- **Professional UI**: Clean, modern interface following design best practices
- **Developer Friendly**: Well-structured code with proper documentation

## Tech Stack

### Frontend
- **React 18.2.0** - Modern functional components with hooks
- **CSS3** - Custom responsive styling with CSS Grid/Flexbox
- **Create React App** - Zero-configuration build setup

### Backend
- **PHP 7.4+** - RESTful API with proper error handling
- **JSON** - Lightweight data storage (100 sample users)
- **CORS** - Cross-origin resource sharing enabled

## Project Structure

```
task-6/
├── backend/
│   ├── index.php              # REST API endpoint
│   ├── users.json             # Sample user data (100 users)
│   └── README.md              # Backend documentation
├── frontend/
│   ├── public/
│   │   └── index.html          # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.js     # Search input component
│   │   │   ├── UserTable.js     # User data table
│   │   │   └── Pagination.js    # Pagination controls
│   │   ├── styles/
│   │   │   └── App.css          # Professional styling
│   │   ├── App.js              # Main application component
│   │   └── index.js            # Application entry point
│   ├── package.json            # Dependencies and scripts
│   ├── .env.example            # Environment variables template
│   └── README.md               # Frontend documentation
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## Quick Start

### Prerequisites
- **Node.js** 14.0+ and npm
- **PHP** 7.4+ with JSON extension
- Modern web browser

### 1. Clone the Repository
```bash
git clone <repository-url>
cd task-6
```

### 2. Start the Backend Server
```bash
cd backend
php -S localhost:8000
```
Backend API available at: `http://localhost:8000`

### 3. Start the Frontend Development Server
```bash
cd frontend
npm install
npm start
```
Frontend application available at: `http://localhost:3000`

## Configuration

### Environment Variables

Copy the example environment file:
```bash
cd frontend
cp .env.example .env
```

Edit `.env` file:
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_NAME=task-6
REACT_APP_VERSION=1.0.0
```

## API Documentation

### Base URL
```
http://localhost:8000
```

### Endpoints

#### Search Users
```http
GET /index.php?search={query}&page={page}
```

**Parameters:**
- `search` (optional): Search term for user names (case-insensitive)
- `page` (optional): Page number (default: 1)

**Example Requests:**
```bash
# Get all users (first page)
curl "http://localhost:8000/index.php"

# Search for users named "john"
curl "http://localhost:8000/index.php?search=john"

# Get page 2 of results
curl "http://localhost:8000/index.php?page=2"

# Search with pagination
curl "http://localhost:8000/index.php?search=smith&page=1"
```

**Response Format:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Smith",
      "email": "john.smith@email.com"
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "per_page": 10,
    "total_pages": 10,
    "has_next": true,
    "has_prev": false
  },
  "search": "john",
  "timestamp": "2024-01-01T12:00:00+00:00"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message",
  "timestamp": "2024-01-01T12:00:00+00:00"
}
```

## Development

### Available Scripts

#### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

#### Backend
```bash
php -S localhost:8000    # Start development server
php -l index.php         # Check syntax
```

### Code Quality
- **ESLint**: Configured for React best practices
- **Responsive Design**: Mobile-first CSS approach
- **Error Boundaries**: Comprehensive error handling
- **Performance**: Debounced search, optimized re-renders

## Production Deployment

### Backend Deployment
1. Upload PHP files to web server
2. Ensure `users.json` has proper read permissions
3. Configure web server for proper CORS headers
4. Set up HTTPS for production

### Frontend Deployment
```bash
cd frontend
npm run build
```

Deploy the `build/` directory to:
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: AWS CloudFront, Cloudflare
- **Web Server**: Apache, Nginx

### Environment Configuration

**Production `.env`:**
```env
REACT_APP_API_URL=https://your-api-domain.com
REACT_APP_NAME=task-6
REACT_APP_VERSION=1.0.0
GENERATE_SOURCEMAP=false
```

## Testing

### Manual Testing Checklist
- [ ] Search functionality works with various inputs
- [ ] Pagination navigates correctly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Error handling for network failures
- [ ] Loading states display properly
- [ ] Empty search results handled gracefully

### API Testing
```bash
# Test search functionality
curl "http://localhost:8000/index.php?search=test"

# Test pagination
curl "http://localhost:8000/index.php?page=5"

# Test error handling
curl "http://localhost:8000/index.php?page=999999"
```

## Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React team for the amazing framework
- Create React App for zero-config setup
- PHP community for robust backend capabilities

## Support

If you encounter any issues or have questions:
1. Check the [Issues](../../issues) page
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

---

**Built for modern web development**
