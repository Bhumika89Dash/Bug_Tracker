// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import  TesterDashboard from "./components/TesterDashboard.jsx";
import DevDashboard from "./components/DevDashboard.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/developer-oauth" element={<DevDashboard />} />
      <Route path="/tester-oauth" element={<TesterDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
