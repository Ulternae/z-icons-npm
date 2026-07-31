import React from 'react';

export const MinaTicketSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v3a.75.75 0 0 1-.75.75 1.25 1.25 0 1 0 0 2.5.75.75 0 0 1 .75.75v3A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17v-3a.75.75 0 0 1 .75-.75 1.25 1.25 0 1 0 0-2.5.75.75 0 0 1-.75-.75zm10.5 1a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm0 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm0 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"})
);

export default MinaTicketSolid;
