import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Home from "./components/Home";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "*", element: <Navigate to="/" replace /> }, // 所有不匹配的子路徑，統一導回首頁
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
