import React from 'react';

export const MinaCircleDashed = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 12a9 9 0 0 1-.706 3.5M12 21a9 9 0 0 1-3.5-.706M3 12c0-1.241.251-2.424.706-3.5M12 3c1.241 0 2.424.251 3.5.706m-9.864 1.93A9 9 0 0 1 8.5 3.706m9.864 14.658a9 9 0 0 1-2.864 1.93m2.864-14.658a9 9 0 0 1 1.93 2.864M5.636 18.364a9 9 0 0 1-1.93-2.864"})
);

export default MinaCircleDashed;
