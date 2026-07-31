import React from 'react';

export const MinaChevronDoubleDownRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9.255 18.5a.75.75 0 0 1-.75-.75l3.253-3.254H5.25a.75.75 0 0 1-.751-.751L13.745 4.5a.75.75 0 0 1 .75.75v6.508l3.254-3.254a.75.75 0 0 1 .751.751v8.494a.75.75 0 0 1-.75.751z"})
);

export default MinaChevronDoubleDownRightSolid;
