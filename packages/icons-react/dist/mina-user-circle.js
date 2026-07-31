import React from 'react';

export const MinaUserCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M14.5 9.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M17 19.5c-.317-6.187-9.683-6.187-10 0"})
);

export default MinaUserCircle;
