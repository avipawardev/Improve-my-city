# Improve My City

A full-stack MERN application for reporting and managing civic issues.

## Features

- User registration and authentication (JWT)
- Report complaints with images and location
- Track complaint status
- Admin dashboard for managing complaints
- Public dashboard to view resolved issues
- Real-time chatbot for assistance
- Responsive UI with Tailwind CSS

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT
- **File Upload**: Multer, Cloudinary
- **Maps**: Google Maps API

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd improve-my-city
   ```

2. Install dependencies for both client and server:
   ```bash
   npm run install-all
   ```

3. Set up environment variables:

   **Server (.env)**:
   ```
   MONGO_URI=mongodb://localhost:27017/improve-my-city
   JWT_SECRET=your_jwt_secret_key_here
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   PORT=5000
   ```

   **Client (.env.local)**:
   ```
   VITE_BACKEND_URL=http://localhost:5000
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

4. Start MongoDB service.

5. Run the application:
   ```bash
   npm run dev
   ```

   This will start both the backend (port 5000) and frontend (port 5173) concurrently.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Complaints
- `GET /api/complaints` - Get user's complaints (or public resolved)
- `POST /api/complaints` - Create new complaint
- `PUT /api/complaints/:id` - Update complaint
- `DELETE /api/complaints/:id` - Delete complaint

### Admin
- `GET /api/admin/complaints` - Get all complaints
- `PUT /api/admin/complaints/:id/status` - Update complaint status
- `GET /api/admin/stats` - Get dashboard stats

## Project Structure

```
improve-my-city/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── ...
├── server/                 # Node.js backend
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── ...
├── docs/
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.