import React from 'react';

export const MinaCircleHalf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18V3"})
);

export default MinaCircleHalf;
