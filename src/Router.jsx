import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page from "components/Page";
import ErrorPage from "pages/ErrorPage";

export default function Router() {
  const router = createBrowserRouter([
    { path: "/", errorElement: <ErrorPage /> },
    {
      path: "/user/:user/",
      element: <Page />,
      errorElement: <ErrorPage />
    }
  ]);

  return <RouterProvider router={router} />;
}
