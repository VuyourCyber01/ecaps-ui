import Login from "@/pages/Login";
import PageNotFound from "@/pages/PageNotFound";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ProtectedLayout from "./ProtectedLayout";
import UnProtectedLayout from "./UnprotectedLayout";
import Home from "@/pages/Home";
import Signup from "@/pages/Signup";

const Layout = () => {
  return (
    <div>
      <div className="flex">
        <div className="home-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const routes = [
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: (
      <ProtectedLayout>
        <Layout />
      </ProtectedLayout>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <UnProtectedLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      </UnProtectedLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <UnProtectedLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Signup />
        </Suspense>
      </UnProtectedLayout>
    ),
  },
];

export default routes;
