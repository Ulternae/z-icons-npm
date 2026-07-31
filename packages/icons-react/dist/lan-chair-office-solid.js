import React from 'react';

export const LanChairOfficeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 0h128c35.3 0 64 28.7 64 64v176H96V64c0-35.3 28.7-64 64-64M64 160v64c0 17.7-14.3 32-32 32S0 241.7 0 224v-64c0-17.7 14.3-32 32-32s32 14.3 32 32m384 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32s32 14.3 32 32M32 352v-32c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H256v64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-64H64c-17.7 0-32-14.3-32-32"})
);

export default LanChairOfficeSolid;
