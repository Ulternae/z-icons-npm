import React from 'react';

export const MinaClockTwelve = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 6v6m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
);

export default MinaClockTwelve;
