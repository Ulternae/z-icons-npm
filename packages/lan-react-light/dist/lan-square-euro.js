import React from 'react';

export function LanSquareEuro({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm263.9 32h33c8.8 0 16 7.2 16 16s-7.2 16-16 16h-33c-35.7 0-66.8 19.3-83.6 48H240c8.8 0 16 7.2 16 16s-7.2 16-16 16h-71.4c-1 5.4-1.4 11-1.4 16.8 0 5.2.4 10.3 1.2 15.2h71.7c8.8 0 16 7.2 16 16s-7.2 16-16 16h-60.6c16.6 29.5 48.2 49.5 84.5 49.5h33c8.8 0 16 7.2 16 16s-7.2 16-16 16h-33c-54.4 0-101-33.8-119.8-81.5H120c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c-.6-5-.9-10.1-.9-15.2 0-5.7.4-11.3 1.1-16.8H120c-8.8 0-16-7.2-16-16s7.2-16 16-16h24.7c19.2-46.9 65.4-80 119.2-80"})
  );
}

export default LanSquareEuro;
