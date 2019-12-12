import React, { useContext } from 'react';
import messages from 'messages';
import AppContext from 'utils/context';

const Page3 = () => {
  const { intl } = useContext(AppContext);

  return <div>{intl.formatMessage(messages.page, { page: 3 })}</div>;
};

export default Page3;
