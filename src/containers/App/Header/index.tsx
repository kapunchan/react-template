import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import messages from 'messages';
import AppContext from 'utils/context';

export const LOCALES = ['en', 'zh-CN'];
export const ROUTES = ['Page1', 'Page2', 'Page3'];

export interface HeaderProps {
  children?: React.ReactElement;
}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const { intl, setLocale } = useContext(AppContext);
  const { formatMessage: f } = intl;

  return (
    <div className="header">
      <ul>
        {LOCALES.map(locale => (
          <li key={locale} onClick={() => setLocale(locale)}>
            {f(messages[locale])}
          </li>
        ))}
      </ul>
      <ul>
        {ROUTES.map((route, i) => (
          <li key={route}>
            <NavLink to={route}>{f(messages.page, { page: i + 1 })}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
