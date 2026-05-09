import React from 'react';

export const MinaMagnet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3 7.5V12a9 9 0 1 0 18 0V7.5m-18 0V5a2 2 0 0 1 2-2h1.625a2 2 0 0 1 2 2v2.5M3 7.5h5.625m0 0V12a3.375 3.375 0 1 0 6.75 0V7.5m0 0V5a2 2 0 0 1 2-2H19a2 2 0 0 1 2 2v2.5m-5.625 0H21"})
);

export default MinaMagnet;
