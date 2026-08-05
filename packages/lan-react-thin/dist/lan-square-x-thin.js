import React from 'react';

export function LanSquareXThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm158.2 66.9 65.8 80.4 65.8-80.4c2.8-3.4 7.8-3.9 11.3-1.1s3.9 7.8 1.1 11.3L234.3 256l67.9 82.9c2.8 3.4 2.3 8.5-1.1 11.3s-8.5 2.3-11.3-1.1L224 268.7l-65.8 80.4c-2.8 3.4-7.8 3.9-11.3 1.1s-3.9-7.8-1.1-11.3l67.9-82.9-67.9-82.9c-2.8-3.4-2.3-8.5 1.1-11.3s8.5-2.3 11.3 1.1"})
  );
}

export default LanSquareXThin;
