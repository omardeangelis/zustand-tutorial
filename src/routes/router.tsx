import { createBrowserRouter, RouterProvider } from "react-router";
import BasicRoute from "./basic/route";
import { AppLayout } from "@/layout/app-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <BasicRoute />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
