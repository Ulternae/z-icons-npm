import React from 'react';

export const LanAlignSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L417.8 352H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H353.8l-64-64H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H225.8l-64-64H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H97.8zM218.2 288H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h186.2zM90.6 160.4C75.5 163 64 176.2 64 192c0 17.7 14.3 32 32 32h58.2zM346.2 416H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h314.2z"})
);

export default LanAlignSlashSolid;
