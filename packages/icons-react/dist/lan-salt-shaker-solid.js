import React from 'react';

export const LanSaltShakerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M311.5 448h-239l32-256h175zm-239 64h239c38.5 0 68.3-33.7 63.5-71.9L335.9 127C326.8 54.5 265.1 0 192 0S57.2 54.5 48.1 127L9 440.1C4.2 478.3 34 512 72.5 512M192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 48a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanSaltShakerSolid;
