import React from 'react';

export const MinaFatCornerLeftUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12.283 2.438a.75.75 0 0 0-1.008.013L3.489 9.704a.75.75 0 0 0 .511 1.3h4.064c.193 2.747 1.341 5.118 3.421 7.08 2.253 2.126 5.054 3.341 8.366 3.663a.75.75 0 0 0 .534-1.337c-2.793-2.188-4.196-4.004-4.515-5.438-.309-1.393-.39-2.714-.252-3.969H20a.75.75 0 0 0 .497-1.312z"})
);

export default MinaFatCornerLeftUpSolid;
