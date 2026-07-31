import React from 'react';

export const LanFaceDizzyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m117.7-117.7 42.3 42.3 42.3-42.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-42.3 42.3 42.3 42.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L160 203.2l-42.3 42.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l42.3-42.3-42.3-42.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0m192 0 42.3 42.3 42.3-42.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-42.3 42.3 42.3 42.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L352 203.2l-42.3 42.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l42.3-42.3-42.3-42.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0M200 352a56 56 0 1 0 112 0 56 56 0 1 0-112 0m56 72a72 72 0 1 1 0-144 72 72 0 1 1 0 144"})
);

export default LanFaceDizzyThin;
