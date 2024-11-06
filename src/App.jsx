import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailMovie from "./page/DetailMovie";
import NotFound from "./page/NotFound";
import ShowMovie from "./page/ShowMovie";
import FavoritMovie from "./page/FavoritMovie";

// Layout
import PublicLayout from "./layout/PublicLayout";

// Context Balance Movie
import { BalanceMovieProvider } from "./context/BalanceMovieContext";

// Context Favorite Movie
import { FavoriteMovieProvider } from "./context/FavoriteMovieContext";
import RecomendationDetail from "./page/RecomendationDetail";

// Manage React Router DOM
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <ShowMovie />,
      },
      {
        path: "/movie/:id",
        element: <DetailMovie />
      },
      {
        path: "/favorite",
        element: <FavoritMovie />
      },
      {
        path: "/recomend-movie/:id",
        element: <RecomendationDetail />
      },
      {
        path: "*",
        element: <NotFound />
      },
    ],
  },
]);

function App() {
  return (
    <FavoriteMovieProvider>
      <BalanceMovieProvider>
        <RouterProvider router={router} />
      </BalanceMovieProvider>
    </FavoriteMovieProvider>
  );
};

export default App;
