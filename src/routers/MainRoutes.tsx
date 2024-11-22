import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../pages/layout/MainLayout";

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];

export default MainRoutes;
