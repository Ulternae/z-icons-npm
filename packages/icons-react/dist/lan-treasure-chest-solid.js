import React from 'react';

export const LanTreasureChestSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 41.3V248H0v-88c0-53.7 33.1-99.7 80-118.7M0 296h80v184H64c-35.3 0-64-28.7-64-64zm128 184V296h96v24c0 17.7 14.3 32 32 32s32-14.3 32-32v-24h96v184zm304 0V296h80v120c0 35.3-28.7 64-64 64zm80-232h-80V41.3c46.9 19 80 65 80 118.7zM384 32v216h-96v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24h-96V32z"})
);

export default LanTreasureChestSolid;
