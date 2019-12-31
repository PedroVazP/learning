import { addRouteRegistrationHandler } from 'app/routes/registry';
import LicensePage from './licensing/LicensePage';
import ReportsList from './reports/ReportsListPage';
import NewReportPage from './reports/NewReportPage';
import EditReportPage from './reports/EditReportPage';
import DataSourcePermissions from './permissions/DataSourcePermissions';
import { addRootReducer } from 'app/store/configureStore';
import dataSourcePermissionReducers from './permissions/state/reducers';
import reportsReducers from './reports/state/reducers';

addRootReducer({ ...dataSourcePermissionReducers, ...reportsReducers });

addRouteRegistrationHandler($routeProvider => {
  $routeProvider
    .when('/admin/licensing', {
      template: '<react-container />',
      resolve: {
        roles: () => ['Admin'],
        component: () => LicensePage,
      },
    })
    .when('/datasources/edit/:id/permissions', {
      template: '<react-container />',
      resolve: {
        component: () => DataSourcePermissions,
      },
    })
    .when('/reports', {
      template: '<react-container />',
      resolve: {
        component: () => ReportsList,
      },
    })
    .when('/reports/new', {
      template: '<react-container />',
      resolve: {
        component: () => NewReportPage,
      },
    })
    .when('/reports/edit/:id', {
      template: '<react-container />',
      resolve: {
        component: () => EditReportPage,
      },
    });
});
