import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ReportIssue from './pages/ReportIssue';
import MyComplaints from './pages/MyComplaints';
import AdminDashboard from './pages/AdminDashboard';
import PublicDashboard from './pages/PublicDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/report',
    element: <ReportIssue />,
  },
  {
    path: '/my-complaints',
    element: <MyComplaints />,
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
  },
  {
    path: '/public',
    element: <PublicDashboard />,
  },
]);

export default router;