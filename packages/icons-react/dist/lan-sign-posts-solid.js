import React from 'react';

export const LanSignPostsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48v16C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h256v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64V48c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H128V48c0-17.7-14.3-32-32-32S64 30.3 64 48"})
);

export default LanSignPostsSolid;
