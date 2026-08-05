import React from 'react';

export function LanSquareJ({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm288 80v104c0 39.8-32.2 72-72 72s-72-32.2-72-72v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0-8.8 7.2-16 16-16s16 7.2 16 16"})
  );
}

export default LanSquareJ;
