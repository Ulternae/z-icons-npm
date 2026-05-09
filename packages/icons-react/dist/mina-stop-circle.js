import React from 'react';

export const MinaStopCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement('path', {"d":"M9.5 12c0-1.178 0-1.768.366-2.134S10.822 9.5 12 9.5s1.768 0 2.134.366.366.956.366 2.134 0 1.768-.366 2.134-.956.366-2.134.366-1.768 0-2.134-.366S9.5 13.178 9.5 12"})
);

export default MinaStopCircle;
