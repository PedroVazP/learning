import { reducerFactory } from 'app/core/redux';
import { reportLoaded, updateReportProp, reportsLoaded, clearReportState } from './actions';
import { Report, ReportsState, SchedulingFrequency } from '../../types';

const getTimezone = () => {
  // Older browser does not the internationalization API
  if (!(window as any).Intl) {
    return '';
  }

  const dateFormat = (window as any).Intl.DateTimeFormat();
  if (!dateFormat.resolvedOptions) {
    return '';
  }

  const options = dateFormat.resolvedOptions();
  if (!options.timeZone) {
    return '';
  }

  return options.timeZone;
};

const blankReport: Report = {
  id: 0,
  name: '',
  recipients: '',
  replyTo: '',
  message:
    'Hi all, \n' +
    'please find enclosed a PDF status report. If you have any questions, feel free to get in touch with me!\n' +
    'Have a great day. \n' +
    'Best,',
  dashboardId: undefined,
  dashboardName: '',
  schedule: {
    frequency: SchedulingFrequency.Weekly,
    hour: 12,
    minute: 0,
    day: 'monday',
    timeZone: getTimezone(),
  },
};

const initialState: ReportsState = {
  reports: [] as Report[],
  report: blankReport,
  hasFetchedList: false,
  hasFetchedSingle: false,
  searchQuery: '',
  reportCount: 0,
};

export const reportsReducers = reducerFactory(initialState)
  .addMapper({
    filter: reportsLoaded,
    mapper: (state, action) => ({
      ...state,
      reports: action.payload,
      reportCount: action.payload.length,
      hasFetchedList: true,
    }),
  })
  .addMapper({
    filter: reportLoaded,
    mapper: (state, action) => ({
      ...state,
      report: action.payload,
      hasFetchedSingle: true,
    }),
  })
  .addMapper({
    filter: updateReportProp,
    mapper: (state, action) => ({
      ...state,
      report: action.payload,
    }),
  })
  .addMapper({
    filter: clearReportState,
    mapper: state => ({
      ...state,
      report: blankReport,
    }),
  })
  .create();

export default {
  reports: reportsReducers,
};
