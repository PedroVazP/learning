import { SelectableValue } from '@grafana/data';

export const daysOfWeek: Array<SelectableValue<string>> = [
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' },
];

export interface ReportsState {
  reports: Report[];
  report: Report;
  hasFetchedList: boolean;
  hasFetchedSingle: boolean;
  searchQuery: string;
  reportCount: number;
}

export interface Report {
  id: number;
  name: string;
  schedule: SchedulingOptions;
  dashboardId: number;
  dashboardName: string;
  recipients: string;
  message: string;
  replyTo: string;
}

export interface ReportDTO {
  id?: number;
  name: string;
  dashboardId: number;
  recipients: string;
  replyTo: string;
  message: string;
  schedule: SchedulingOptions;
}

export enum SchedulingFrequency {
  Weekly = 'weekly',
  Daily = 'daily',
  Hourly = 'hourly',
}

export interface SchedulingOptions {
  frequency: SchedulingFrequency;
  day: string;
  hour?: number;
  minute: number;
  timeZone: string;
}
