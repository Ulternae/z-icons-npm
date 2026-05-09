import React from 'react';

export const MinaPassword = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m13.5 9-3 6m0-6 3 6m-3.75-3h4.5m-7.5-3-3 6m0-6 3 6M3 12h4.5m12.75-3-3 6m0-6 3 6m-3.75-3H21"})
);

export default MinaPassword;
