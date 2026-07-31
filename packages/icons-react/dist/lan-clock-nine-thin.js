import React from 'react';

export const LanClockNineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m264-152v152c0 4.4-3.6 8-8 8H136c-4.4 0-8-3.6-8-8s3.6-8 8-8h112V104c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanClockNineThin;
