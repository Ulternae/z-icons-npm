import React from 'react';

export const MinaImageCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement('path', {"d":"M7 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0m13.718 1.08c-6.38-.75-11.85 3.906-11.716 10.144"}), React.createElement('path', {"d":"M3.2 13.04c2.7-.294 5.107 1.036 6.424 3.126"})
);

export default MinaImageCircle;
