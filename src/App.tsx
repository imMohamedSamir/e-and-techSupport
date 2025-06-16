import Root from './pages/Root';
import HomePage from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default function App() {
  return <RouterProvider {...{ router }} />;
}
