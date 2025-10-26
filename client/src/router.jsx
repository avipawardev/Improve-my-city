import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ReportIssue from './pages/ReportIssue';
import MyComplaints from './pages/MyComplaints';
import AdminDashboard from './pages/AdminDashboard';
import PublicDashboard from './pages/PublicDashboard';
import ProtectedRoute from './components/ProtectedRoute';

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
    element: <ProtectedRoute><ReportIssue /></ProtectedRoute>,
  },
  {
    path: '/my-complaints',
    element: <ProtectedRoute><MyComplaints /></ProtectedRoute>,
  },
  {
    path: '/admin',
    element: <ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>,
  },
  {
    path: '/public',
    element: <PublicDashboard />,
  },
]);

export default router;