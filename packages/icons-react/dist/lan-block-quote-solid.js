import React from 'react';

export const LanBlockQuoteSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32zm128 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-32 192c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32 14.3-32 32M32 224c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32"})
);

export default LanBlockQuoteSolid;
