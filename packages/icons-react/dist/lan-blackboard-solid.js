import React from 'react';

export const LanBlackboardSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 64c-35.3 0-64 28.7-64 64v256c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32V128c0-35.3-28.7-64-64-64zm384 320h-64v-32c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v32H96V128h384z"})
);

export default LanBlackboardSolid;
