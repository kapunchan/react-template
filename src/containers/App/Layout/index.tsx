import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { IntlContext } from 'react-intl';
import AppContext, { AppShape } from 'utils/context';
import Header, { ROUTES } from '../Header';
import Body from '../Body';

interface LayoutProps extends AppShape {
  prefixCls?: string;
}

class Layout extends PureComponent<LayoutProps> {
  static contextType = IntlContext;

  render() {
    const { account, setLocale } = this.props;
    const context = {
      account,
      intl: this.context,
      prefixCls: 'core',
      setLocale,
    };

    return (
      <AppContext.Provider value={context}>
        <div className="layout">
          <Header />
          <Body>
            <Switch>
              {ROUTES.map(route => (
                <Route component={require(`../../${route}`).default} key={route} path={`/${route}`} />
              ))}
            </Switch>
          </Body>
        </div>
      </AppContext.Provider>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  ...ownProps,
  account: state.account,
  layout: state.layout,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
