import React from 'react';

export const MinaApi = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M5.5 13 7 11.5l5.5 5.5-1.5 1.5c-.75.75-3.5 2-5.5 0s-.75-4.75 0-5.5M3 21l2.5-2.5m13-7.5L17 12.5 11.5 7 13 5.5c.75-.75 3.5-2 5.5 0s.75 4.75 0 5.5m-6-3-2 2M21 3l-2.5 2.5m-2.5 6-2 2"})
);

export default MinaApi;
