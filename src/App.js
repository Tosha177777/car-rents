import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'rsuite';

import { Header } from './components/Header/Header';

const FavoritePage = lazy(() => import('pages/Favorite/FavoritePage'));
const CatalogPage = lazy(() => import('pages/Catalog/CatalogPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const appRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/catalog',
    element: <CatalogPage />,
  },
  {
    path: '/favorite',
    element: <FavoritePage />,
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
