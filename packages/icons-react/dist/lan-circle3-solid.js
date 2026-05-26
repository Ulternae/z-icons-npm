import React from 'react';

export const LanCircle3Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m20-280c11 0 20-9 20-20s-9-20-20-20h-76c-13.3 0-24-10.7-24-24s10.7-24 24-24h76c37.6 0 68 30.4 68 68 0 16.8-6.1 32.1-16.2 44 10.1 11.9 16.2 27.2 16.2 44 0 37.6-30.4 68-68 68h-76c-13.3 0-24-10.7-24-24s10.7-24 24-24h76c11 0 20-9 20-20s-9-20-20-20h-52c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanCircle3Solid;
