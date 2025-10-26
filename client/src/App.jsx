import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ComplaintProvider } from './context/ComplaintContext';
import router from './router';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <ComplaintProvider>
        <RouterProvider router={router} />
      </ComplaintProvider>
    </AuthProvider>
  );
}

export default App;
