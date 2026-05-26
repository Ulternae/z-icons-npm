import React from 'react';

export const LanSpaceStationMoonSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 256c0 10.8-.7 21.4-2 31.9-72.4 25.2-159.6 40.1-254 40.1S74.4 313.1 2 287.9C.7 277.4 0 266.8 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256M256 376c87 0 169.2-12 241-33.5C461.5 441.3 367 512 256 512S50.5 441.3 15 342.5C86.8 364 169 376 256 376m-96-216a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
);

export default LanSpaceStationMoonSolid;
