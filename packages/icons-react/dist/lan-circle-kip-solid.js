import React from 'react';

export const LanCircleKipSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m90.5-375.2c8.4 10.2 6.9 25.4-3.3 33.8l-84.7 69.7h77.3c8.8 0 16 7.2 16 16s-7.2 16-16 16h-77.1l84.5 69.2c10.3 8.4 11.8 23.5 3.4 33.8s-23.6 11.7-33.8 3.3L224 305.9V360c0 13.3-10.7 24-24 24s-24-10.7-24-24v-87.8h-15.8c-8.8 0-16-7.2-16-16s7.2-16 16-16H176V152c0-13.3 10.7-24 24-24s24 10.7 24 24v54.5l88.8-73c10.2-8.4 25.4-6.9 33.8 3.3z"})
);

export default LanCircleKipSolid;
