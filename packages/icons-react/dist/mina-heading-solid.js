import React from 'react';

export const MinaHeadingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M7.25 3.75A.75.75 0 0 1 8 4.5v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75H8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75"})
);

export default MinaHeadingSolid;
