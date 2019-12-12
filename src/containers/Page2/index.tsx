import React, { useContext } from 'react';
import messages from 'messages';
import AppContext from 'utils/context';

const Page2 = () => {
  const { intl } = useContext(AppContext);

  return <div>{intl.formatMessage(messages.page, { page: 2 })}</div>;
};

export default Page2;
