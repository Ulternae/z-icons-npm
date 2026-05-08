import React from 'react';

export const MinaMinimize = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9.75 3.01c-.04 2.79-.247 4.37-1.308 5.432C7.38 9.502 5.799 9.71 3.01 9.75M9.75 21c-.04-2.79-.247-4.371-1.308-5.432S5.799 14.3 3.01 14.26M14.26 3.01c.04 2.79.247 4.37 1.308 5.432C16.629 9.502 18.211 9.71 21 9.75M14.26 21c.04-2.79.247-4.371 1.308-5.432S18.211 14.3 21 14.26"})
);

export default MinaMinimize;
