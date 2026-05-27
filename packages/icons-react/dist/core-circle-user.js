import React from 'react';

export const CoreCircleUser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-104c-30.9 0-60.2 7-86.3 19.5 25.9 13.1 55.2 20.5 86.3 20.5 31 0 60.3-7.4 86.2-20.5C316.1 415 286.8 408 256 408m0-344C150 64 64 150 64 256c0 52.8 21.3 100.5 55.8 135.2C159.3 366.3 206 352 256 352s96.8 14.4 136.2 39.2C426.7 356.5 448 308.8 448 256c0-106-86-192-192-192m0 256a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0-136a40 40 0 1 0 0 80 40 40 0 1 0 0-80"})
);

export default CoreCircleUser;
