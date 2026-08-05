import React from 'react';

export function LanSquareRupiah({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 32h56c39.8 0 72 32.2 72 72 0 29.4-17.6 54.7-42.8 65.8l25.7 64.2c3.3 8.2-.7 17.5-8.9 20.8s-17.5-.7-20.8-8.9l-28-69.9H128v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16m56 112c22.1 0 40-17.9 40-40s-17.9-40-40-40h-40v80zm88 0c0-8.8 7.2-16 16-16h40c30.9 0 56 25.1 56 56s-25.1 56-56 56h-24v48c0 8.8-7.2 16-16 16s-16-7.2-16-16zm32 64h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24z"})
  );
}

export default LanSquareRupiah;
