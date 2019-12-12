import React from 'react';

export interface AppShape {
  account?: any;
  intl?: any;
  prefixCls?: string;
  setLocale: (locale: string) => void;
}

const AppContext = React.createContext<AppShape>(null as any);

export default AppContext;
