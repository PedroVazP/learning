import React, { ChangeEvent, FormEvent, MouseEvent, PureComponent } from 'react';
import { DateTime, SelectableValue } from '@grafana/data';
import { Button, FormField, FormLabel, LinkButton } from '@grafana/ui';
import { DashboardPicker } from 'app/core/components/Select/DashboardPicker';
import { ReportScheduling } from './ReportScheduling';
import { createReport, updateReport, updateReportProp } from './state/actions';
import { Report, ReportDTO, SchedulingFrequency } from '../types';

type Subpick<T extends { [key: string]: any }, K extends keyof T> = T[K];
type ReportType = Subpick<Pick<Props, 'report'>, 'report'>;

type OnChangeEditableStateKey = keyof Pick<ReportType, 'name' | 'replyTo' | 'recipients' | 'message'>;

export interface Props {
  heading: string;
  report: Report;

  createOrUpdate: typeof createReport | typeof updateReport;
  updateReportProp: typeof updateReportProp;
}

function isEmail(email: string) {
  if (!email) {
    return true;
  }

  return email.includes('@');
}

export class ReportPage extends PureComponent<Props> {
  onChange = (propKey: OnChangeEditableStateKey, value: string | number) => {
    const { report, updateReportProp } = this.props;
    updateReportProp({
      ...report,
      [propKey]: value,
    });
  };

  onModeChange = (frequency: SchedulingFrequency) => {
    const { report, updateReportProp } = this.props;

    updateReportProp({
      ...report,
      schedule: {
        ...report.schedule,
        frequency,
      },
    });
  };

  onDayOfWeekChange = (dayOfWeek: SelectableValue<string>) => {
    const { report, updateReportProp } = this.props;

    updateReportProp({
      ...report,
      schedule: {
        ...report.schedule,
        day: dayOfWeek.value,
      },
    });
  };

  onTimeOfDayChange = (timeOfDay: DateTime) => {
    const { report, updateReportProp } = this.props;

    updateReportProp({
      ...report,
      schedule: {
        ...report.schedule,
        hour: timeOfDay.hour(),
        minute: timeOfDay.minute(),
      },
    });
  };

  onTimeZoneChange = (timeZone: string) => {
    const { report, updateReportProp } = this.props;

    updateReportProp({
      ...report,
      schedule: {
        ...report.schedule,
        timeZone,
      },
    });
  };

  onDashboardChange = (dashboard: SelectableValue<number>) => {
    if (dashboard) {
      const { report, updateReportProp } = this.props;
      updateReportProp({
        ...report,
        dashboardId: dashboard.id,
        dashboardName: dashboard.label,
      });
    }
  };

  submitForm = (event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { createOrUpdate, report } = this.props;
    const { name, recipients, dashboardId, replyTo, message, schedule } = report;

    const reportDto: ReportDTO = {
      id: report ? report.id : undefined,
      name,
      recipients,
      dashboardId,
      replyTo,
      message,
      schedule,
    };

    createOrUpdate(reportDto);
  };

  validateRecipients = () => {
    const { recipients } = this.props.report;

    if (!recipients) {
      return true;
    }
    const splitRecipients = recipients.split(';');

    return splitRecipients.every(email => isEmail(email));
  };

  render() {
    const { heading, report } = this.props;
    const { message, name, recipients, replyTo, schedule, dashboardId, dashboardName } = report;

    const labelWidth = 10;
    const inputWidth = 30;

    const currentDashboard = dashboardId > 0 ? { value: dashboardId, label: dashboardName } : undefined;
    const canPreview = dashboardId > 0;

    return (
      <div>
        <h3 className="page-sub-heading">{heading}</h3>
        <form className="gf-form-group" onSubmit={this.submitForm}>
          <FormField
            label="Name"
            labelWidth={labelWidth}
            inputWidth={inputWidth}
            placeholder="System status report"
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>) => this.onChange('name', event.target.value)}
            required={true}
          />
          <div className="gf-form-inline">
            <FormLabel width={labelWidth}>Choose dashboard</FormLabel>
            <DashboardPicker
              onSelected={this.onDashboardChange}
              className="width-30"
              currentDashboardId={currentDashboard}
            />
          </div>
          <div className="form-field">
            <FormLabel width={labelWidth}>Recipients</FormLabel>
            <textarea
              className={`gf-form-input width-${inputWidth}`}
              placeholder="name@company.com;another.name@company.com;"
              rows={1}
              value={recipients}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => this.onChange('recipients', event.target.value)}
              onBlur={this.validateRecipients}
              required={true}
            />
          </div>
          <FormField
            label="Reply to"
            labelWidth={labelWidth}
            inputWidth={inputWidth}
            placeholder="your.address@company.com - optional"
            value={replyTo}
            onChange={(event: ChangeEvent<HTMLInputElement>) => this.onChange('replyTo', event.target.value)}
            type="email"
          />
          <div className="form-field">
            <FormLabel width={labelWidth}>Custom message</FormLabel>
            <textarea
              value={message}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => this.onChange('message', event.target.value)}
              className={`gf-form-input width-${inputWidth}`}
              rows={10}
            />
          </div>
        </form>
        <div className="gf-form-group">
          <LinkButton
            href={`/api/reports/render/pdf/${dashboardId}`}
            size="xs"
            variant="secondary"
            target="_blank"
            disabled={!canPreview}
          >
            Preview
          </LinkButton>
        </div>
        <div className="gf-form-group">
          <div>
            <h4>Scheduling</h4>
            <ReportScheduling
              schedulingOptions={schedule}
              onModeChange={this.onModeChange}
              onDayOfWeekChange={this.onDayOfWeekChange}
              onTimeOfDayChange={this.onTimeOfDayChange}
              onTimeZoneChange={this.onTimeZoneChange}
            />
          </div>
        </div>
        <div className="gf-form-button-row">
          <Button onClick={this.submitForm} size="xs" variant="primary">
            Save
          </Button>
        </div>
      </div>
    );
  }
}
