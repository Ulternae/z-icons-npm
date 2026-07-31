import React from 'react';

export const MinaMobileSignalFive = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M3 21v-1m18 1V3m-9 18v-9m4.5 9V8m-9 13v-5"})
);

export default MinaMobileSignalFive;
