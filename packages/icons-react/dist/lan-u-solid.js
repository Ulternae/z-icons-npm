import React from 'react';

export const LanUSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 32c17.7 0 32 14.3 32 32v224c0 70.7 57.3 128 128 128s128-57.3 128-128V64c0-17.7 14.3-32 32-32s32 14.3 32 32v224c0 106-86 192-192 192S0 394 0 288V64c0-17.7 14.3-32 32-32"})
);

export default LanUSolid;
