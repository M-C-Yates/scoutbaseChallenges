import React, {Suspense} from 'react';
import { Router } from '@reach/router';

import Navbar from '../Components/Navbar';

const HomePage = React.lazy(() => import('../Pages/HomePage'));
const CountriesPage = React.lazy(() => import('../Pages/CountriesPage'));
const CountryPage = React.lazy(() => import('../Pages/CountryPage'));
const NotFoundPage = React.lazy(() => import('../Pages/NotFoundPage'));

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Navbar />
    <Router>
      <NotFoundPage default />
      <HomePage path='/' />
      <CountriesPage path="/countries" />
        <CountryPage path="/countries/:code" />
    </Router>
  </Suspense>
)
export default AppRouter;