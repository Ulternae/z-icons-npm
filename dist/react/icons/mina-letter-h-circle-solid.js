import React from 'react';

export const MinaLetterHCircleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-3.5z"})
);

export default MinaLetterHCircleSolid;
