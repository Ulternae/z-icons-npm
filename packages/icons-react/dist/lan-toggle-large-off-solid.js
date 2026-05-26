import React from 'react';

export const LanToggleLargeOffSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0 64h192c106 0 192-86 192-192S490 64 384 64H192C86 64 0 150 0 256s86 192 192 192m143.1-64c30.4-34 48.9-78.8 48.9-128s-18.5-94-48.9-128H384c70.7 0 128 57.3 128 128s-57.3 128-128 128z"})
);

export default LanToggleLargeOffSolid;
