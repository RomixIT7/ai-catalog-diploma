import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "./components/Loader/Loader.jsx";
import Header from "./components/Header/Header.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailsPage = lazy(() =>
  import("./pages/CamperDetailsPage/CamperDetailsPage.jsx")
);
const FavoritePage = lazy(() =>
  import("./pages/FavoritePage/FavoritePage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/catalog" element={<CatalogPage />}></Route>
            <Route
              path="/catalog/:id/*"
              element={<CamperDetailsPage />}
            ></Route>
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
