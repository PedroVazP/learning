import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { NavModel } from '@grafana/data';
import Page from 'app/core/components/Page/Page';
import EmptyListCTA from 'app/core/components/EmptyListCTA/EmptyListCTA';
import { ReportList } from './ReportsList';
import { getNavModel } from 'app/core/selectors/navModel';
import { getReports, deleteReport } from './state/actions';
import { EnterpriseStoreState, Report } from '../types';

export interface Props {
  navModel: NavModel;
  reports: Report[];
  searchQuery: string;
  reportCount: number;
  hasFetched: boolean;

  getReports: typeof getReports;
  deleteReport: typeof deleteReport;
}

export class ReportsListPage extends PureComponent<Props> {
  componentDidMount(): void {
    this.props.getReports();
  }

  deleteReport = (report: Report) => {
    this.props.deleteReport(report.id);
  };

  renderList() {
    const { reports, reportCount } = this.props;

    if (reportCount > 0) {
      return (
        <>
          <div className="page-action-bar">
            <div className="gf-form gf-form--grow">
              <div className="page-action-bar__spacer" />
              <a className="btn btn-primary" href="/reports/new">
                New report
              </a>
            </div>
          </div>
          <ReportList reports={reports} deleteReport={this.deleteReport} />
        </>
      );
    } else {
      return (
        <EmptyListCTA
          title="You haven't created any reports yet."
          buttonIcon="fa fa-envelope"
          buttonLink="/reports/new"
          buttonTitle=" New report"
          proTip=""
          proTipLink=""
          proTipLinkTitle=""
          proTipTarget="_blank"
        />
      );
    }
  }

  render() {
    const { hasFetched, navModel } = this.props;

    return (
      <Page navModel={navModel}>
        <Page.Contents isLoading={!hasFetched}>{hasFetched && this.renderList()}</Page.Contents>
      </Page>
    );
  }
}

function mapStateToProps(state: EnterpriseStoreState) {
  return {
    navModel: getNavModel(state.navIndex, 'reports-list'),
    reports: state.reports.reports,
    hasFetched: state.reports.hasFetchedList,
    searchQuery: state.reports.searchQuery,
    reportCount: state.reports.reportCount,
  };
}

const mapDispatchToProps = {
  getReports,
  deleteReport,
};

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReportsListPage)
);
