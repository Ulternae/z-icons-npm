import React from 'react';

export const LanH2Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V288h96v128c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H96zm272-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h81.1c21.5 0 38.9 17.4 38.9 38.9 0 13.9-7.5 26.8-19.6 33.8l-76.3 43.6c-44.6 25.4-72.1 72.8-72.1 124.2V416c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H384v-15.5c0-28.4 15.2-54.6 39.9-68.7l76.3-43.6c32-18.3 51.8-52.4 51.8-89.3C552 110.1 505.9 64 449.1 64z"})
);

export default LanH2Solid;
