<?php
/**
 * User Search API
 * 
 * Provides REST API endpoints for searching and paginating users
 * 
 * @author User Search Team
 * @version 2.0
 */

// Set response headers
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Max-Age: 86400');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    // Load and validate users data
    if (!file_exists('users.json')) {
        throw new Exception('Users data file not found');
    }
    
    $usersData = file_get_contents('users.json');
    if ($usersData === false) {
        throw new Exception('Failed to read users data');
    }
    
    $users = json_decode($usersData, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data: ' . json_last_error_msg());
    }
    
    if (!is_array($users)) {
        throw new Exception('Invalid users data format');
    }

    // Get and validate query parameters
    $search = isset($_GET['search']) ? trim($_GET['search']) : '';
    $page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
    $perPage = 10;
    
    // Validate search term length
    if (strlen($search) > 100) {
        throw new Exception('Search term too long');
    }
    
    // Validate page number
    if ($page < 1 || $page > 1000) {
        throw new Exception('Invalid page number');
    }

    // Filter users by search term (case-insensitive)
    $filteredUsers = $users;
    if (!empty($search)) {
        $filteredUsers = array_filter($users, function($user) use ($search) {
            return isset($user['name']) && stripos($user['name'], $search) !== false;
        });
    }

    // Calculate pagination
    $total = count($filteredUsers);
    $totalPages = ceil($total / $perPage);
    $offset = ($page - 1) * $perPage;
    $paginatedUsers = array_slice($filteredUsers, $offset, $perPage);

    // Prepare response
    $response = [
        'success' => true,
        'data' => array_values($paginatedUsers),
        'pagination' => [
            'total' => $total,
            'page' => $page,
            'per_page' => $perPage,
            'total_pages' => $totalPages,
            'has_next' => $page < $totalPages,
            'has_prev' => $page > 1
        ],
        'search' => $search,
        'timestamp' => date('c')
    ];
    
    // Legacy format support
    $response['total'] = $total;
    $response['per_page'] = $perPage;
    
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage(),
        'timestamp' => date('c')
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}
?>