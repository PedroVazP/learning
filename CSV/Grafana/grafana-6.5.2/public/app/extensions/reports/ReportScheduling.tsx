import React, { FC } from 'react';
import { FormLabel, Select, TimeOfDayPicker, ToggleButton, ToggleButtonGroup } from '@grafana/ui';
import { dateTime, DateTime, SelectableValue } from '@grafana/data';
import { daysOfWeek, SchedulingFrequency, SchedulingOptions } from '../types';
import { TimeZonePicker } from '@grafana/ui/src/components/TimePicker/TimeZonePicker';

interface Props {
  schedulingOptions: SchedulingOptions;
  onModeChange: (mode: SchedulingFrequency) => void;
  onDayOfWeekChange: (day: SelectableValue<string>) => void;
  onTimeOfDayChange: (time: DateTime) => void;
  onTimeZoneChange: (timeZone: string) => void;
}

export const ReportScheduling: FC<Props> = ({
  onModeChange,
  onDayOfWeekChange,
  onTimeOfDayChange,
  onTimeZoneChange,
  schedulingOptions,
}) => {
  const { frequency, hour, minute, timeZone } = schedulingOptions;

  const selectedDay = daysOfWeek.filter(day => schedulingOptions.day === day.value);
  const labelWidth = 6;

  return (
    <>
      <ToggleButtonGroup label="Frequency">
        <ToggleButton
          key={SchedulingFrequency.Weekly}
          value={SchedulingFrequency.Weekly}
          onChange={onModeChange}
          selected={frequency === SchedulingFrequency.Weekly}
        >
          Weekly
        </ToggleButton>
        <ToggleButton
          value={SchedulingFrequency.Daily}
          key={SchedulingFrequency.Daily}
          onChange={onModeChange}
          selected={frequency === SchedulingFrequency.Daily}
        >
          Daily
        </ToggleButton>
        <ToggleButton
          value={SchedulingFrequency.Hourly}
          key={SchedulingFrequency.Hourly}
          onChange={onModeChange}
          selected={frequency === SchedulingFrequency.Hourly}
        >
          Hourly
        </ToggleButton>
      </ToggleButtonGroup>
      <div>
        {frequency === SchedulingFrequency.Weekly && (
          <>
            <div className="gf-form">
              <FormLabel width={labelWidth}>Day</FormLabel>
              <Select width={15} onChange={onDayOfWeekChange} options={daysOfWeek} value={selectedDay} />
            </div>
            <div className="gf-form">
              <FormLabel width={labelWidth}>Time</FormLabel>
              <TimeOfDayPicker
                onChange={onTimeOfDayChange}
                minuteStep={10}
                value={dateTime(new Date(`January 1, 1970 ${hour}:${minute}`))}
              />
            </div>
          </>
        )}
        {frequency === SchedulingFrequency.Daily && (
          <div className="gf-form">
            <FormLabel width={labelWidth}>Time</FormLabel>
            <TimeOfDayPicker
              minuteStep={10}
              onChange={onTimeOfDayChange}
              value={dateTime(new Date(`January 1, 1970 ${hour}:${minute}`))}
            />
          </div>
        )}
        {frequency === SchedulingFrequency.Hourly && (
          <div className="gf-form">
            <FormLabel width={6}>At minute</FormLabel>
            <TimeOfDayPicker
              showHour={false}
              minuteStep={10}
              onChange={onTimeOfDayChange}
              value={dateTime(new Date(`January 1, 1970 ${hour}:${minute}`))}
            />
          </div>
        )}
        <div className="gf-form">
          <FormLabel width={labelWidth}>Time zone</FormLabel>
          <TimeZonePicker value={timeZone} onChange={onTimeZoneChange} />
        </div>
      </div>
    </>
  );
};
