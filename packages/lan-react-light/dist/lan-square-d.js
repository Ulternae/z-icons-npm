import React from 'react';

export function LanSquareD({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 64h64c53 0 96 43 96 96s-43 96-96 96h-64c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16m16 160h48c35.3 0 64-28.7 64-64s-28.7-64-64-64h-48z"})
  );
}

export default LanSquareD;
