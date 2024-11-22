import Chat from "../pages/chats/Chat";
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
      },
      {
        path: "chats",
        element: <Chat />,
      },
    ],
  },
];

export default MainRoutes;
