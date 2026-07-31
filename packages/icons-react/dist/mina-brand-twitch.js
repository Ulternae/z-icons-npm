import React from 'react';

export const MinaBrandTwitch = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M15.556 11.1V7.5M20 3H4v14.4h4.444V21L12 17.4h4.444L20 13.8zm-8.889 8.1V7.5z"})
);

export default MinaBrandTwitch;
