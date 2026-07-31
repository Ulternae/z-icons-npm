import React from 'react';

export const LanBedBunkSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h384v32c0 17.7 14.3 32 32 32s32-14.3 32-32V112C512 50.1 461.9 0 400 0H256c-17.7 0-32 14.3-32 32v96H64zm160 256v96H64V192h384v64H256c-17.7 0-32 14.3-32 32m-32 16a48 48 0 1 0-96 0 48 48 0 1 0 96 0M144 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanBedBunkSolid;
