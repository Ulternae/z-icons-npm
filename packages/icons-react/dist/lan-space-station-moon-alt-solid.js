import React from 'react';

export const LanSpaceStationMoonAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 256c0 10.8-.7 21.4-2 31.9-72.4 25.2-159.6 40.1-254 40.1S74.4 313.1 2 287.9C.7 277.4 0 266.8 0 256 0 114.6 114.6 0 256 0c57.8 0 111.1 19.1 153.9 51.4 3.9 3 6.1 7.6 6.1 12.4V80c0 8.8-7.2 16-16 16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64c8.8 0 16 7.2 16 16v32c0 8.8 7.2 16 16 16h31.9c8.1 0 14.9 6 15.5 14.1.4 5.9.6 11.9.6 17.9M256 376c44.1 0 87.1-3.1 128-9v17c0 8.8 7.2 16 16 16h32c8.8 0 16 7.2 16 16v3.3c0 3.9-1.4 7.7-4.1 10.5C397.1 480.3 330.2 512 256 512c-111 0-205.5-70.7-241-169.5C86.8 363.9 169 376 256 376m-96-216a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
);

export default LanSpaceStationMoonAltSolid;
