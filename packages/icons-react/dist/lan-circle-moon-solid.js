import React from 'react';

export const LanCircleMoonSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448C150 64 64 150 64 256c2.6 104.5 85.4 192 192 192 49.7-1.3 96.8-18.8 132.9-53.6 5.5-5.3 7-13.4 3.9-20.3s-10.2-11.2-17.8-10.6c-76.4 3.4-144.9-51.7-148.9-130.4-1.4-54.6 26.8-106 76.3-130.7 6.8-3.4 10.8-10.7 9.8-18.3-.8-6.6-5.2-12.2-11.2-14.6-14.6-4.6-30-5.2-45.2-5.6z"})
);

export default LanCircleMoonSolid;
