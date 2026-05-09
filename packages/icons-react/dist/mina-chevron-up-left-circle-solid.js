import React from 'react';

export const MinaChevronUpLeftCircleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M10 9.25a.75.75 0 0 0-.75.75v4.95a.75.75 0 1 0 1.5 0v-4.2h4.2a.75.75 0 1 0 0-1.5z"})
);

export default MinaChevronUpLeftCircleSolid;
