import React, { Suspense } from 'react';
import PublicLayout from './layouts/PublicLayout';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, protectedRoutes } from 'src/routes/route';
import ProtectedLayout from './layouts/ProtectedLayout';
import BackDropLoader from './components/loaders/BackDropLoader';
import LinearLoader from './components/loaders/LinerLoader';

function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />} >
          {
            publicRoutes.map(({ path, component: Component }, idx) => {
              return (
                <Route
                  key={`${path}-${idx}`}
                  path={path}
                  element={
                    <Suspense fallback={<LinearLoader/>}>
                      <Component />
                    </Suspense>
                  }
                />
              )
            })
          }
        </Route>
        {/* Protected Routes */}
        <Route element={<ProtectedLayout />} >
          {
            protectedRoutes.map(({ path, component: Component }, idx) => {
              return (
                <Route
                  key={`${path}-${idx}`}
                  path={path}
                  element={
                    <Suspense fallback={<LinearLoader/>}>
                      <Component />
                    </Suspense>
                  }
                />
              )
            })
          }
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
