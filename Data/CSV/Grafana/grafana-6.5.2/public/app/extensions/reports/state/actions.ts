import { getBackendSrv } from '@grafana/runtime';
import { actionCreatorFactory } from 'app/core/redux';
import { updateLocation } from 'app/core/actions';
import { ThunkResult } from 'app/types';
import { Report, ReportDTO } from '../../types';

export const reportsLoaded = actionCreatorFactory<Report[]>('LOAD_REPORTS').create();
export const reportLoaded = actionCreatorFactory<Report>('LOAD_REPORT').create();
export const updateReportProp = actionCreatorFactory<Report>('UPDATE_REPORT_PROP').create();
export const clearReportState = actionCreatorFactory('CLEAR_REPORT_STATE').create();

export function getReports(): ThunkResult<void> {
  return async dispatch => {
    const reports = await getBackendSrv().get('/api/reports');
    dispatch(reportsLoaded(reports));
  };
}

export function loadReport(id: number): ThunkResult<void> {
  return async dispatch => {
    const report = await getBackendSrv().get(`/api/reports/${id}`);
    dispatch(reportLoaded(report));
  };
}

export function deleteReport(id: number): ThunkResult<void> {
  return async dispatch => {
    await getBackendSrv().delete(`/api/reports/${id}`);
    dispatch(getReports());
  };
}

export function createReport(report: ReportDTO): ThunkResult<void> {
  return async dispatch => {
    await getBackendSrv().post('/api/reports', report);
    dispatch(getReports());
    dispatch(updateLocation({ path: '/reports' }));
  };
}

export function updateReport(report: ReportDTO): ThunkResult<void> {
  return async dispatch => {
    await getBackendSrv().put(`/api/reports/${report.id}`, report);
    dispatch(getReports());
    dispatch(updateLocation({ path: '/reports' }));
  };
}

export const setSearchQuery = (value: string) => {};
