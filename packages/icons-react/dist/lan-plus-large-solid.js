import React from 'react';

export const LanPlusLargeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h192v192c0 17.7 14.3 32 32 32s32-14.3 32-32V288h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H288z"})
);

export default LanPlusLargeSolid;
