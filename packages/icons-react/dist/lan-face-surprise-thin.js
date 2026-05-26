import React from 'react';

export const LanFaceSurpriseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m144 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0M200 352a56 56 0 1 0 112 0 56 56 0 1 0-112 0m56 72a72 72 0 1 1 0-144 72 72 0 1 1 0 144"})
);

export default LanFaceSurpriseThin;
