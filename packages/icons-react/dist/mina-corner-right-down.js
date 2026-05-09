import React from 'react';

export const MinaCornerRightDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M13.973 19V9a4 4 0 0 0-4-4H5m8.973 14-5.027-4.78M13.973 19 19 14.22"})
);

export default MinaCornerRightDown;
