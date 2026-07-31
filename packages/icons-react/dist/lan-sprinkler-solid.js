import React from 'react';

export const LanSprinklerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48M0 128a24 24 0 1 1 48 0 24 24 0 1 1-48 0m0 104a24 24 0 1 1 48 0 24 24 0 1 1-48 0M64 72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m40-32a24 24 0 1 1 48 0 24 24 0 1 1-48 0m360 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24-80a24 24 0 1 1-48 0 24 24 0 1 1 48 0M488 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-40 72a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-40-32a24 24 0 1 1-48 0 24 24 0 1 1 48 0M256 64c17.7 0 32 14.3 32 32v160h100.2c15.3 0 27.8 12.4 27.8 27.8 0 7.8-3.3 15.2-9 20.5L320 384v96c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-96l-87-79.7c-5.7-5.3-9-12.7-9-20.5 0-15.3 12.4-27.8 27.8-27.8H224V96c0-17.7 14.3-32 32-32"})
);

export default LanSprinklerSolid;
