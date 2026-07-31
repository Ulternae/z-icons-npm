import React from 'react';

export const MinaThreeCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M9.5 9.994c0-2.659 5-2.659 5 0 0 0 0 2.006-2.5 2.006 2.5 0 2.5 2.006 2.5 2.006 0 2.659-5 2.659-5 0"})
);

export default MinaThreeCircle;
