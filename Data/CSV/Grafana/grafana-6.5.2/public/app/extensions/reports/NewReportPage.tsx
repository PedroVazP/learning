import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavModel } from '@grafana/data';
import { ReportPage } from './ReportPage';
import Page from 'app/core/components/Page/Page';
import { createReport, updateReportProp } from './state/actions';
import { getNavModel } from 'app/core/selectors/navModel';
import { EnterpriseStoreState, Report } from '../types';

interface Props {
  navModel: NavModel;
  report: Report;
  createReport: typeof createReport;
  updateReportProp: typeof updateReportProp;
}

export class NewReportPage extends PureComponent<Props> {
  render() {
    const { createReport, navModel, report, updateReportProp } = this.props;

    return (
      <Page navModel={navModel}>
        <Page.Contents isLoading={false}>
          <ReportPage
            heading="New report"
            createOrUpdate={createReport}
            report={report}
            updateReportProp={updateReportProp}
          />
        </Page.Contents>
      </Page>
    );
  }
}

function mapStateToProps(state: EnterpriseStoreState) {
  return {
    navModel: getNavModel(state.navIndex, 'reports-list'),
    report: state.reports.report,
  };
}

const mapActionsToProps = {
  createReport,
  updateReportProp,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(NewReportPage);
