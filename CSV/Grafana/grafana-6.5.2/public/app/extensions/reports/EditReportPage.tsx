import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavModel } from '@grafana/data';
import { Props as ReportPageProps, ReportPage } from './ReportPage';
import Page from 'app/core/components/Page/Page';
import { clearReportState, loadReport, updateReport, updateReportProp } from './state/actions';
import { getReport } from './state/selectors';
import { getRouteParamsId } from 'app/core/selectors/location';
import { getNavModel } from 'app/core/selectors/navModel';
import { EnterpriseStoreState } from '../types';

interface Props extends ReportPageProps {
  navModel: NavModel;
  loadReport: typeof loadReport;
  updateReport: typeof updateReport;
  clearReportState: typeof clearReportState;
  updateReportProp: typeof updateReportProp;
  reportId: number;
}

export class EditReportPage extends PureComponent<Props> {
  componentDidMount() {
    const { loadReport, reportId } = this.props;
    loadReport(reportId);
  }

  componentWillUnmount() {
    this.props.clearReportState();
  }

  render() {
    const { navModel, report, updateReport, updateReportProp } = this.props;
    return (
      <Page navModel={navModel}>
        <Page.Contents isLoading={!report}>
          <ReportPage
            heading={`Edit ${report && report.name}`}
            createOrUpdate={updateReport}
            report={report}
            updateReportProp={updateReportProp}
          />
        </Page.Contents>
      </Page>
    );
  }
}

function mapStateToProps(state: EnterpriseStoreState) {
  const reportId = getRouteParamsId(state.location);
  return {
    navModel: getNavModel(state.navIndex, 'reports-list'),
    report: getReport(state.reports, reportId),
    reportId,
  };
}

const mapActionsToProps = {
  updateReport,
  loadReport,
  clearReportState,
  updateReportProp,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EditReportPage);
