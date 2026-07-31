import React from 'react';

export const MinaTrendingDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"m20 17-5.846-5.938c-1.964-1.983-4.106 2.148-6.153.001L4 7m16 10v-7m0 7h-7"})
);

export default MinaTrendingDown;
