import React from 'react';

export const MinaWaves = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m3 5.918 1.764-.887a4.97 4.97 0 0 1 4.472 0l.528.266a4.97 4.97 0 0 0 4.472 0l.528-.266a4.97 4.97 0 0 1 4.472 0L21 5.918M3 10.446l1.764-.888a4.97 4.97 0 0 1 4.472 0l.528.266a4.97 4.97 0 0 0 4.472 0l.528-.266a4.97 4.97 0 0 1 4.472 0l1.764.888M3 14.973l1.764-.888a4.97 4.97 0 0 1 4.472 0l.528.266a4.97 4.97 0 0 0 4.472 0l.528-.266a4.97 4.97 0 0 1 4.472 0l1.764.888M3 19.5l1.764-.887a4.97 4.97 0 0 1 4.472 0l.528.265a4.97 4.97 0 0 0 4.472 0l.528-.265a4.97 4.97 0 0 1 4.472 0L21 19.5"})
);

export default MinaWaves;
