import React from 'react';

export const MinaLetterZCircleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9 7.25a.75.75 0 0 0 0 1.5h4.5l-5.1 6.8a.75.75 0 0 0 .6 1.2h6a.75.75 0 0 0 0-1.5h-4.5l5.1-6.8a.75.75 0 0 0-.6-1.2z"})
);

export default MinaLetterZCircleSolid;
