import React from 'react';

export function LanSquare2({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 65.3h57.8c29.9 0 54.2 24.3 54.2 54.2 0 21.2-12.3 40.4-31.6 49.2L220 281.4c-15.5 7.1-26 21.8-27.7 38.6H272c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-10.9c0-31.3 18.2-59.7 46.7-72.7l36.4-16.7c7.9-3.6 12.9-11.5 12.9-20.2 0-12.2-9.9-22.2-22.2-22.2H176c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanSquare2;
