import React from 'react';

export const LanDiceFiveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64M96 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanDiceFiveSolid;
