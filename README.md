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
   MONGO_URI=mongodb+srv://pravanshpatel6pp_db_user:i0WXSZFHnh1riVHq@improvemycity.niwwd0i.mongodb.net/?appName=ImproveMyCity
   JWT_SECRET=ImproveMyCityAPP
   CLOUDINARY_CLOUD_NAME=dqxu9y6hu
   CLOUDINARY_API_KEY=569252624791245
   CLOUDINARY_API_SECRET=MgpRjAuBNKt4xwEdGHIJ9Hu7tAg
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   PORT=8000
   ```

   **Client (.env.local)**:

   ```
   VITE_BACKEND_URL=http://localhost:8000
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

4. Create admin user:

   ```bash
   cd server
   node createAdmin.js
   ```

   This will create an admin user with:

   - Email: admin@improvemycity.com
   - Password: admin123

5. Start MongoDB service.

6. Run the application:

7. Start MongoDB service.

8. Run the application:

   ```bash
   npm run dev
   ```

   This will start both the backend (port 8000) and frontend (port 5173) concurrently.

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
