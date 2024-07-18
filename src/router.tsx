import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "@/Pages/Login";
import HomePage from "@/Pages/Home";
import RegisterPage from "./Pages/Register";
import DashboardLayout from "./Layouts/DashboardLayout";
import BooksPage from "./Pages/Books";
import AuthLayout from "./Layouts/AuthLayout";
import CreateBook from "./Pages/createBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to = '/dashboard/home' />
  },
  
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "books/create",
        element: <CreateBook />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
