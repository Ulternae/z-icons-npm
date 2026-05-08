import React from 'react';

export const MinaChevronDownRightCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M13.95 9v4.95H9"}), React.createElement('path', {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
);

export default MinaChevronDownRightCircle;
