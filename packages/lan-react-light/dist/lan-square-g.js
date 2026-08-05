import React from 'react';

export function LanSquareG({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm152 160c0 39.8 32.2 72 72 72 34.3 0 63-23.9 70.2-56H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h72c8.8 0 16 7.2 16 16 0 57.4-46.6 104-104 104s-104-46.6-104-104 46.6-104 104-104c26.6 0 50.9 10 69.3 26.5 6.6 5.9 7.1 16 1.3 22.6s-16 7.1-22.6 1.3c-12.7-11.4-29.5-18.3-48-18.3-39.8 0-72 32.2-72 72z"})
  );
}

export default LanSquareG;
