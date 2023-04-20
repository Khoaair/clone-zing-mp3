import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { path } from './ultils/path';
import { HomePage, MyMusic, SharedLayout } from './pages/DashBoard';
import { Error } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<SharedLayout />}>
          <Route path={path.home} element={<HomePage />} />
          <Route path={path.myMusic} element={<MyMusic />} />
        </Route>
        <Route path={path.error} element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
