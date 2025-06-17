import Root from "./pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Copper from "./pages/Copper";
import Ftth from "./pages/Ftth";
import Msan from "./pages/Msan";
import HomePage from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/copper", element: <Copper /> },
      { path: "/ftth", element: <Ftth /> },
      { path: "/msan", element: <Msan /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider {...{ router }} />;
}
