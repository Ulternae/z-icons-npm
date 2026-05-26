import React from 'react';

export const LanSeatsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 0h64c35.3 0 64 28.7 64 64v176H32V64C32 28.7 60.7 0 96 0m256 0h64c35.3 0 64 28.7 64 64v176H288V64c0-35.3 28.7-64 64-64m160 352c0 17.7-14.3 32-32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96H288v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96H96v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32z"})
);

export default LanSeatsSolid;
