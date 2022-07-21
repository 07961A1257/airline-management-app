import * as React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './shared/Layout';
import LogoOnlyLayout from './shared/Layout/LogoOnlyLayout';

/**Lazy Loading of components */
const DashboardPage = React.lazy(() => import('./pages/Dashboard/DashboardPage'));

const LoginPage = React.lazy(() => import('./pages/Login/LoginPage'));

const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

const PassengerList = React.lazy(() => import('./pages/PassengerList/PassengerList'));

const AncillaryService = React.lazy(() => import('./pages/AncillaryService/AncillaryServicePage'));

const PassengerCheckInPage = React.lazy(() =>
  import('./pages/PassengerCheckIn/PassengerCheckInPage')
);

const PassengerInFlightPage = React.lazy(() =>
  import('./pages/PassengerInFlight/PassengerInFlight')
);

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <DashboardPage /> },
        { path: '/dashboard', element: <DashboardPage /> },
        { path: '/passenger-list', element: <PassengerList /> },
        { path: '/ancillary-services', element: <AncillaryService /> },
        { path: '/check-in', element: <PassengerCheckInPage /> },
        { path: '/in-flight', element: <PassengerInFlightPage /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: 'login', element: <LoginPage /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
