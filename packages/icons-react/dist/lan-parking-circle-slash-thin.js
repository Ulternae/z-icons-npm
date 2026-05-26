import React from 'react';

export const LanParkingCircleSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M431.3 420 312 300.7c36.9-10.4 64-44.4 64-84.7 0-48.6-39.4-88-88-88h-96c-8.8 0-16 7.2-16 16v20.7l-84-84C134.9 40.5 192.6 16 256 16c132.5 0 240 107.5 240 240 0 63.4-24.6 121.1-64.7 164M420 431.3C377.1 471.4 319.4 496 256 496 123.5 496 16 388.5 16 256c0-63.4 24.6-121.1 64.7-164l95.3 95.3V376c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h96c1.5 0 3.1 0 4.6-.1zm-121.4-144L192.1 180.8v-36.7h96c39.8 0 72 32.2 72 72 0 36.2-26.7 66.1-61.5 71.2m-106.6-84 84.7 84.7H192zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512"})
);

export default LanParkingCircleSlashThin;
