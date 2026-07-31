import React from 'react';

export const MinaArrowLeftRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M6.5 7.5h11m0 0L14 11m3.5-3.5L14 4m3.5 12.5h-11m0 0L10 20m-3.5-3.5L10 13"})
);

export default MinaArrowLeftRight;
