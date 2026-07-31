import React from 'react';

export const LanExpandArrowsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L224 210.7 109.3 96H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32C14.3 32 0 46.3 0 64v128c0 17.7 14.3 32 32 32s32-14.3 32-32v-50.7L178.7 256 64 370.7V320c0-17.7-14.3-32-32-32S0 302.3 0 320v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-50.7L224 301.3 338.7 416H288c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v50.7L269.3 256 384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32z"})
);

export default LanExpandArrowsSolid;
