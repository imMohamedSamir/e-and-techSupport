import HomePage from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

export default function App() {
  return <RouterProvider {...{ router }} />;
}
