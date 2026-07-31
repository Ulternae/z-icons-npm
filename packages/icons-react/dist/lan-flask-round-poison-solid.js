import React from 'react';

export const LanFlaskRoundPoisonSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C64 14.3 78.3 0 96 0h192c17.7 0 32 14.3 32 32s-14.3 32-32 32v89.7c57.3 33.2 96 95.2 96 166.3 0 106-86 192-192 192S0 426 0 320c0-71.1 38.7-133.1 96-166.3V64c-17.7 0-32-14.3-32-32m240 280c0-48.6-50.1-88-112-88S80 263.4 80 312c0 29.9 19 56.3 48 72.2V400c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-15.8c29-15.9 48-42.3 48-72.2m-152-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanFlaskRoundPoisonSolid;
