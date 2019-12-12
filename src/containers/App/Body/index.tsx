import React from 'react';

interface BodyProps {
  children?: React.ReactElement;
}

const Body: React.FunctionComponent<BodyProps> = ({ children }) => {
  return <div className="body">{children}</div>;
};

export default Body;
