import React from 'react';

export const MinaLetterA = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M14.25 13.667 11.75 7l-2.5 6.667m5 0L15.5 17m-1.25-3.333h-5M8 17l1.25-3.333"})
);

export default MinaLetterA;
