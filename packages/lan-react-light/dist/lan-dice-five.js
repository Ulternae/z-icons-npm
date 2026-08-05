import React from 'react';

export function LanDiceFive({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48m216 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-120 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 120a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-168-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanDiceFive;
