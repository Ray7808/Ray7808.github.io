import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "blogs", Component: Blogs },
      { path: "projects", Component: Projects },
      { path: "*", element: <Navigate to="/" replace /> }, // 所有不匹配的子路徑，統一導回首頁
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
