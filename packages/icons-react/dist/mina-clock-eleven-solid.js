import React from 'react';

export const MinaClockElevenSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.5-6a.75.75 0 0 0-1.5 0v3.385l-1.114-1.782a.75.75 0 0 0-1.272.795l2.5 4A.75.75 0 0 0 12.75 12z"})
);

export default MinaClockElevenSolid;
