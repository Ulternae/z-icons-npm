import React from 'react';

export const LanCarPeopleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M107.1 101.8 80.6 224h34.1c6.6-18.6 24.4-32 45.3-32h32c20.9 0 38.7 13.4 45.3 32h37.5c6.6-18.6 24.4-32 45.3-32h32c20.9 0 38.7 13.4 45.3 32h34.2L405 101.8C400.1 79.7 380.6 64 358 64H154c-22.6 0-42.1 15.7-46.9 37.8M29.2 234.3l3.3-15.4L60.2 91.6C69.8 47.5 108.9 16 154 16h204c45.2 0 84.2 31.5 93.8 75.6l27.7 127.3 3.3 15.4c17.6 11.4 29.2 31.2 29.2 53.7v160c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H96v32c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V288c0-22.5 11.6-42.3 29.2-53.7M136 128a40 40 0 1 1 80 0 40 40 0 1 1-80 0m200-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80M128 320a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanCarPeopleSolid;
