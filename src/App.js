import { Suspense } from 'react';
import { Header } from './components/Header/Header';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from 'Catalog/CatalogPage';

const appRoutes = [
  {
    path: '/',
    element: (
      // <RestrictedRoute>
      <CatalogPage />
      // </RestrictedRoute>
    ),
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
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
