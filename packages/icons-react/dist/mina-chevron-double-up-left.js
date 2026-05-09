import React from 'react';

export const MinaChevronDoubleUpLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M14.743 6.257H6.257v8.486"}), React.createElement('path', {"d":"M18.743 10.257h-8.486v8.486"})
);

export default MinaChevronDoubleUpLeft;
