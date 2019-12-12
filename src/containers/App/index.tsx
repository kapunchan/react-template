import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './Header';
import Layout from './Layout';
import messages from 'utils/messages';
import './index.less';

const App: React.FunctionComponent = () => {
  const [locale, setLocale] = useState(LOCALES[1]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
};

export default App;
