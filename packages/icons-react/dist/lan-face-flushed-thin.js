import React from 'react';

export const LanFaceFlushedThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m192 128h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H192c-4.4 0-8-3.6-8-8s3.6-8 8-8m-32-96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160m256 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0m-128 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m192 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
);

export default LanFaceFlushedThin;
