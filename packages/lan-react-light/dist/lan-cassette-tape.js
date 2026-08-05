import React from 'react';

export function LanCassetteTape({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32h-26.7l-10.4-31.2c-6.5-19.6-24.9-32.8-45.5-32.8H146.6c-20.7 0-39 13.2-45.5 32.8L90.7 416H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zm-16 352h16c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64zm-44.4-32H124.4l7-21.1c2.2-6.5 8.3-10.9 15.2-10.9h218.8c6.9 0 13 4.4 15.2 10.9zM144 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m224-32H144c-35.3 0-64 28.7-64 64s28.7 64 64 64h224c35.3 0 64-28.7 64-64s-28.7-64-64-64m-55.4 96H199.5c5.4-9.4 8.6-20.3 8.6-32s-3.1-22.6-8.6-32h113.1c-5.4 9.4-8.6 20.3-8.6 32s3.1 22.6 8.6 32m87.4-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0"})
  );
}

export default LanCassetteTape;
