import React from 'react';

export const LanH5Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V288h96v128c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H96zm256-32c-17.7 0-32 14.3-32 32v144c0 17.7 14.3 32 32 32h80c30.9 0 56 25.1 56 56s-25.1 56-56 56h-80c-17.7 0-32 14.3-32 32s14.3 32 32 32h80c66.3 0 120-53.7 120-120s-53.7-120-120-120h-48v-80h120c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
);

export default LanH5Solid;
