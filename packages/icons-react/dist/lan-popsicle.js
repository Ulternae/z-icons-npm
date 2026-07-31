import React from 'react';

export const LanPopsicle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 160c0-70.7-57.3-128-128-128S32 89.3 32 160v176c0 8.8 7.2 16 16 16h96V192c0-8.8 7.2-16 16-16s16 7.2 16 16v160h96c8.8 0 16-7.2 16-16zM144 384H48c-26.5 0-48-21.5-48-48V160C0 71.6 71.6 0 160 0s160 71.6 160 160v176c0 26.5-21.5 48-48 48h-96v112c0 8.8-7.2 16-16 16s-16-7.2-16-16z"})
);

export default LanPopsicle;
