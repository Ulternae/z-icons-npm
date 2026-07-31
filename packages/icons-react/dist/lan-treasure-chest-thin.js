import React from 'react';

export const LanTreasureChestThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 48v216h-96v-40c0-17.7-14.3-32-32-32s-32 14.3-32 32v40h-96V48zm16 1.1c54.3 7.8 96 54.4 96 110.9v104h-96zM496 280v136c0 26.5-21.5 48-48 48h-48V280zM384 464H128V280h96v40c0 17.7 14.3 32 32 32s32-14.3 32-32v-40h96zm-272 0H64c-26.5 0-48-21.5-48-48V280h96zM16 264V160c0-56.4 41.7-103.1 96-110.9V264zM128 32C57.3 32 0 89.3 0 160v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-70.7-57.3-128-128-128zm144 288c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"})
);

export default LanTreasureChestThin;
