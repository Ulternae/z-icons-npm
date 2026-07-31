import React from 'react';

export const LanShirtRunningSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 0c17.7 0 32 14.3 32 32v48c0 44.2 35.8 80 80 80s80-35.8 80-80V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 33.3 2.6 61.5 6.5 85.2L0 393.8V282.5c0-17 6.7-33.4 14.7-48.4C28.8 207.6 48 155 48 64V32C48 14.3 62.3 0 80 0M3.8 469.8 360.4 215c3 7.5 6 13.8 8.9 19 8 15 14.7 31.5 14.7 48.4V448c0 35.3-28.7 64-64 64H64c-27.7 0-51.3-17.6-60.2-42.2"})
);

export default LanShirtRunningSolid;
