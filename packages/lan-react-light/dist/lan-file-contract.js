import React from 'react';

export function LanFileContract({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192h-96c-35.3 0-64-28.7-64-64zm146.7 128L224 45.3V128c0 17.7 14.3 32 32 32zM0 64C0 28.7 28.7 0 64 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm127.6 250.9c5.5-6.9 13.9-10.9 22.7-10.9 12.8 0 24.2 8.4 27.8 20.7l17.8 59.3H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H184c-7.1 0-13.3-4.6-15.3-11.4l-19.6-65.3L92.5 410c-5.5 6.9-15.6 8-22.5 2.5s-8-15.6-2.5-22.5zM80 96h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanFileContract;
