import React from 'react';

export const CoreArrowDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m448.3 210.8-160 160V32.1h-64v338.7l-160-160L19 256l214.6 214.6c12.5 12.5 32.8 12.5 45.3 0L493.5 256z"})
);

export default CoreArrowDown;
