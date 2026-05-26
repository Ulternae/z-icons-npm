import React from 'react';

export const LanCameraPolaroidSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v150.3l53.3 79.9c7 10.5 10.7 22.9 10.7 35.5V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-54.3c0-12.6 3.7-25 10.7-35.5L64 246.3zm224 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128m160-128a32 32 0 1 0-64 0 32 32 0 1 0 64 0M120 352c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanCameraPolaroidSolid;
