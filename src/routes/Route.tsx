import React from 'react';
import { RouteProps as ReactDOMRouteProps, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface ReactProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
}

const Route: React.FC<ReactProps> = ({ isPrivate = false, ...rest }) => {
  const { user } = useAuth();

  return <div />;
};

export default Route;
