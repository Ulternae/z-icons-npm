import React from 'react';

export function LanSquareY({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm156.3 69.8L224 247l67.7-81.2c5.7-6.8 15.7-7.7 22.5-2s7.7 15.7 2 22.5L240 277.8V336c0 8.8-7.2 16-16 16s-16-7.2-16-16v-58.2l-76.3-91.5c-5.7-6.8-4.7-16.9 2-22.5s16.9-4.7 22.5 2z"})
  );
}

export default LanSquareY;
