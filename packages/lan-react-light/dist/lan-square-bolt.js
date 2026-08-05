import React from 'react';

export function LanSquareBolt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm261.7 16c19.8 0 34.1 18.8 28.8 37.9L269.9 224h38.7c15.1 0 27.3 12.2 27.3 27.3 0 7.2-2.9 14.2-8 19.3L207.4 391.3c-5.6 5.6-13.2 8.7-21.1 8.7-19.8 0-34.1-18.8-28.8-37.9l20.6-74.1h-38.7c-15.1 0-27.3-12.2-27.3-27.3 0-7.2 2.9-14.2 8-19.3l120.5-120.7c5.6-5.6 13.2-8.7 21.1-8.7M150.6 256h48.5c10.4 0 18.2 10.2 15.4 20.3l-24.1 86.6L297.3 256h-48.5c-10.4 0-18.2-10.3-15.4-20.3l24.1-86.6z"})
  );
}

export default LanSquareBolt;
