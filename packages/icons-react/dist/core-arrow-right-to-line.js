import React from 'react';

export const CoreArrowRightToLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 480h-64V32h64zM342.6 233.4l2.2 2.4c10.2 12.6 9.5 31.1-2.2 42.8L192 429.2l-45.2-45.3 96-96H0v-64h242.8l-96-96L192 82.7l150.6 150.6z"})
);

export default CoreArrowRightToLine;
