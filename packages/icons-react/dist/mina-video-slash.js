import React from 'react';

export const MinaVideoSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"m20.168 6.991-4 3.563a.5.5 0 0 0-.168.373v1.778a.5.5 0 0 0 .168.373l4 3.563a.5.5 0 0 0 .832-.374V7.365a.5.5 0 0 0-.832-.374M3 15.75v-7.5a2 2 0 0 1 2-2h8.5M3 21l3.25-3.25M21 3l-5.5 5.5m0 0v7.25a2 2 0 0 1-2 2H6.25M15.5 8.5l-9.25 9.25"})
);

export default MinaVideoSlash;
