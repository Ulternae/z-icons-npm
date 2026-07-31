import React from 'react';

export const LanTreasureChestRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 80h224v168h-80v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24h-80zm272 6.7c28.3 12.3 48 40.5 48 73.3v88h-48zM464 296v120c0 8.8-7.2 16-16 16h-32V296zm-96 136H144V296h80v24c0 17.7 14.3 32 32 32s32-14.3 32-32v-24h80zm-272 0H64c-8.8 0-16-7.2-16-16V296h48zM48 248v-88c0-32.8 19.7-61 48-73.3V248zm80-216C57.3 32 0 89.3 0 160v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-70.7-57.3-128-128-128z"})
);

export default LanTreasureChestRegular;
