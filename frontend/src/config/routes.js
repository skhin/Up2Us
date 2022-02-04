import { lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import { Route } from "react-router-dom";
import { LayoutContext } from "antd/lib/layout/layout";

export const routes = {
  home: {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
    type: Route,
  },
  aboutUs: {
    name: "AboutUs",
    path: "/aboutus",
    component: lazy(() => import("../components/AboutUs/AboutUs")),
    type: Route,
  },
  contactUs: {
    name: "ContactUs",
    path: "/contactus",
    component: lazy(() => import("../components/ContactUs/ContactUs")),
    type: Route,
  },

  login: {
    name: "Login",
    path: "/login",
    component: lazy(() => import("../pages/Login/LoginPage")),
    type: ProtectedRoute,
  },
};

export const renderRoutes = Object.entries(routes);
