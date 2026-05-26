import React from 'react';

export const LanSkeletonSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0c17.7 0 32 14.3 32 32v32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H288v48h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H288v48h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v48h80c44.2 0 80 35.8 80 80 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-44.2 35.8-80 80-80h80v-48h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96v-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h192v-48H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h128V32c0-17.7 14.3-32 32-32"})
);

export default LanSkeletonSolid;
