import React from 'react';

export const LanInfoSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0M0 192c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v256h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V224H32c-17.7 0-32-14.3-32-32"})
);

export default LanInfoSolid;
