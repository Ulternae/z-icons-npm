import React from 'react';

export const LanTable = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v64h384V96c0-17.7-14.3-32-32-32zM0 192V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm416 0H240v112h176zm-208 0H32v112h176zm0 144H32v80c0 17.7 14.3 32 32 32h144zm32 112h144c17.7 0 32-14.3 32-32v-80H240z"})
);

export default LanTable;
