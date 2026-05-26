import React from 'react';

export const LanCircleHouseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m112-256v85.5c0 23.5-19 42.5-42.5 42.5h-139c-23.5 0-42.5-19-42.5-42.5V256h-9.7c-12.3 0-22.3-10-22.3-22.3 0-6.2 2.5-12 7-16.3l123.2-115.9c3.7-3.5 8.7-5.5 13.8-5.5s10.1 2 13.8 5.5L393 217.4c4.5 4.2 7 10.1 7 16.3 0 12.3-10 22.3-22.3 22.3zm-144 32v48h64v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"})
);

export default LanCircleHouseSolid;
