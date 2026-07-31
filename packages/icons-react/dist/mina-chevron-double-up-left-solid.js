import React from 'react';

export const MinaChevronDoubleUpLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M14.745 5.5a.75.75 0 0 1 .75.75l-3.253 3.254h6.507a.75.75 0 0 1 .751.751L10.255 19.5a.75.75 0 0 1-.75-.75v-6.508L6.25 15.496a.75.75 0 0 1-.751-.751V6.251a.75.75 0 0 1 .75-.751z"})
);

export default MinaChevronDoubleUpLeftSolid;
