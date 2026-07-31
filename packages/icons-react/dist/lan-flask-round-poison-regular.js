import React from 'react';

export const LanFlaskRoundPoisonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M88 48h8v105.7C38.6 186.9 0 248.9 0 320c0 106 86 192 192 192s192-86 192-192c0-71.1-38.6-133.1-96-166.3V48h8c13.3 0 24-10.7 24-24S309.3 0 296 0H88C74.7 0 64 10.7 64 24s10.7 24 24 24m56 120.2V48h96v120.2c0 9.3 5.3 17.7 13.7 21.7C302.4 213 336 262.6 336 320.1c0 79.5-64.5 144-144 144S48 399.5 48 320c0-57.4 33.6-107 82.3-130.2 8.4-4 13.7-12.4 13.7-21.7zM304 312c0-48.6-50.1-88-112-88S80 263.4 80 312c0 29.9 19 56.3 48 72.2V400c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-15.8c29-15.9 48-42.3 48-72.2m-152-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanFlaskRoundPoisonRegular;
