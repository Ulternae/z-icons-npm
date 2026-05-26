import React from 'react';

export const LanCalendarCircleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-52-400c11 0 20 9 20 20v12h64v-12c0-11 9-20 20-20s20 9 20 20v12h8c26.5 0 48 21.5 48 48v16H128v-16c0-26.5 21.5-48 48-48h8v-12c0-11 9-20 20-20m-76 224v-80h256v80c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48"})
);

export default LanCalendarCircleSolid;
