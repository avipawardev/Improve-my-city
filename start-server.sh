#!/bin/bash

# Kill any existing server processes
pkill -9 -f "node.*server.js" 2>/dev/null

# Start the server
cd server
echo "Starting server..."
node server.js
