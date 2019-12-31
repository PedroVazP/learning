import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { StoreState } from "app/types";
import { NavModel } from "@grafana/data";
import { getNavModel } from "app/core/selectors/navModel";
import { getLicenseToken, LicenseToken } from "./state/api";
import Page from "app/core/components/Page/Page";

interface Props {
  navModel: NavModel;
  getLicenseToken: typeof getLicenseToken;
}

interface State {
  token: LicenseToken;
}

export class LicensePage extends PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      token: null
    };
  }

  async componentDidMount() {
    const token = await this.props.getLicenseToken();
    this.setState({ token });
  }

  render() {
    const { navModel } = this.props;
    const { token } = this.state;

    return (
      <Page navModel={navModel}>
        <Page.Contents>
          <div className="page-container page-body">
            <h3 className="page-sub-heading">Enterprise license details</h3>
            {token && <LicenceInfo token={token} />}
          </div>
        </Page.Contents>
      </Page>
    );
  }
}

function LicenceInfo({token}: {token: LicenseToken}) {
  return (
    <table className="filter-table form-inline">
      <tbody>
        <tr>
          <td>License ID</td>
          <td>
            {token.lid} (<a href={`${token.iss}/licenses/${token.lid}`} target="_blank" rel="noopener noreferer">
              View Details
            </a>)
          </td>
        </tr>
        <tr>
          <td>Licensed URL</td>
          <td>
            <a href="{token.sub}" target="_blank" rel="noopener noreferer">
              {token.sub}
            </a>
          </td>
        </tr>
        <tr>
          <td>Company</td>
          <td>{token.company}</td>
        </tr>
        <tr>
          <td>Products</td>
          <td>
            {token.prod}
          </td>
        </tr>
        <tr>
          <td>Max Users</td>
          <td>{token.max_users > 0 ? token.max_users : 'Unlimited'}</td>
        </tr>
        <tr>
          <td>License Issued</td>
          <td>{new Date(token.nbf * 1000).toLocaleDateString()}</td>
        </tr>
        <tr>
          <td>License Expires</td>
          <td>{new Date(token.lexp * 1000).toLocaleDateString()}</td>
        </tr>
        <tr>
          <td colSpan={2} className="admin-settings-section">
            Token Details
          </td>
        </tr>
        <tr>
          <td>Token ID</td>
          <td>{token.jti}</td>
        </tr>
        <tr>
          <td>Token Issued</td>
          <td>{new Date(token.iat * 1000).toLocaleDateString()}</td>
        </tr>
        <tr>
          <td>Token Expires</td>
          <td>{new Date(token.exp * 1000).toLocaleDateString()}</td>
        </tr>
      </tbody>
    </table>
  );
}

const mapStateToProps = (state: StoreState) => ({
  navModel: getNavModel(state.navIndex, "licensing"),
  getLicenseToken: getLicenseToken
});

export default hot(module)(connect(mapStateToProps)(LicensePage));
