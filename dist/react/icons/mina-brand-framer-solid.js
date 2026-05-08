import React from 'react';

export const MinaBrandFramerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M5.5 2.25a.75.75 0 0 0-.522 1.289l5.17 5.011H5.5a.75.75 0 0 0-.75.75v6.3c0 .235.108.445.278.583l6.493 5.394A.75.75 0 0 0 12.75 21v-4.65h5.75a.75.75 0 0 0 .522-1.289l-5.17-5.011H18.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75z"})
);

export default MinaBrandFramerSolid;
