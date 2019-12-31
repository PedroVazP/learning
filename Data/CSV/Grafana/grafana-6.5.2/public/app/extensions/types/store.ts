import { StoreState } from 'app/types';
import { DataSourcePermissionState } from './permissions';
import { ReportsState } from './reports';

export interface EnterpriseStoreState extends StoreState {
  dataSourcePermission: DataSourcePermissionState;
  reports: ReportsState;
}
