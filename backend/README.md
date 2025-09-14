# Backend API - task-6

Professional PHP REST API for user search and pagination functionality.

## Overview

This backend provides a robust REST API for searching and paginating user data. Built with modern PHP practices, comprehensive error handling, and optimized for performance.

## Features

- **Advanced Search**: Case-insensitive name search with input validation
- **Smart Pagination**: Efficient pagination with metadata
- **Error Handling**: Comprehensive error handling and validation
- **CORS Support**: Cross-origin requests enabled
- **Performance**: Optimized data processing
- **Documentation**: Well-documented code with PHPDoc

## Quick Start

### Prerequisites
- PHP 7.4 or higher
- JSON extension enabled

### Installation

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Start development server:**
```bash
php -S localhost:8000
```

3. **Verify installation:**
```bash
curl http://localhost:8000/index.php
```

## API Documentation

### Base URL
```
http://localhost:8000
```

### Endpoints

#### Search Users
```http
GET /index.php
```

**Query Parameters:**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `search` | string | No | Search term for user names (max 100 chars) | `john` |
| `page` | integer | No | Page number (1-1000, default: 1) | `2` |

**Example Requests:**

```bash
# Get all users (page 1)
curl "http://localhost:8000/index.php"

# Search for "john"
curl "http://localhost:8000/index.php?search=john"

# Get page 2
curl "http://localhost:8000/index.php?page=2"

# Search with pagination
curl "http://localhost:8000/index.php?search=smith&page=1"
```

### Success Response

**Status Code:** `200 OK`

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
    "total": 2,
    "page": 1,
    "per_page": 10,
    "total_pages": 1,
    "has_next": false,
    "has_prev": false
  },
  "search": "john",
  "timestamp": "2024-01-01T12:00:00+00:00"
}
```

### Error Response

**Status Code:** `500 Internal Server Error`

```json
{
  "success": false,
  "error": "Search term too long",
  "timestamp": "2024-01-01T12:00:00+00:00"
}
```

## Testing

### Manual Testing

```bash
# Test basic functionality
curl -i "http://localhost:8000/index.php"

# Test search
curl -i "http://localhost:8000/index.php?search=john"

# Test pagination
curl -i "http://localhost:8000/index.php?page=2"

# Test error handling
curl -i "http://localhost:8000/index.php?page=-1"
```

## Production Deployment

### File Permissions
```bash
chmod 644 index.php
chmod 644 users.json
chmod 755 .
```

### Web Server Configuration

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php [QSA,L]

Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
```

---

**Built using modern PHP practices**