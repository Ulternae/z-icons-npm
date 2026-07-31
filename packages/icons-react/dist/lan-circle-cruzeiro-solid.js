import React from 'react';

export const LanCircleCruzeiroSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-93-256c0 44.5 31.2 81.7 73 90.8V248c0-11 9-20 20-20 10.1 0 18.4 7.5 19.8 17.2 10.8-5.8 23.1-9.2 36.2-9.2 11 0 20 9 20 20s-9 20-20 20c-19.9 0-36 16.1-36 36v34.8c16.7-3.7 31.8-11.8 43.8-23.2 9.6-9.1 24.8-8.7 33.9 1s8.7 24.8-1 33.9c-25.2 23.8-59.3 38.5-96.8 38.5-77.9 0-141-63.1-141-141s63.1-141 141-141c37.5 0 71.5 14.6 96.8 38.5 9.6 9.1 10.1 24.3 1 33.9s-24.3 10.1-33.9 1C303.1 172.7 280.7 163 256 163c-51.4 0-93 41.6-93 93"})
);

export default LanCircleCruzeiroSolid;
