import React from 'react';

export const MinaShare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m5-5.5-5 3.5m5 7.5-5-3.5m10 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0-13a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"})
);

export default MinaShare;
