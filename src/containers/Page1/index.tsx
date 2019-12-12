import React, { useContext } from 'react';
import messages from 'messages';
import AppContext from 'utils/context';

const Page1 = () => {
  const { intl } = useContext(AppContext);

  return <div>{intl.formatMessage(messages.page, { page: 1 })}</div>;
};

export default Page1;
