import React from 'react';

export function LanCalendarImageSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 0c17.7 0 32 14.3 32 32v32h128V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V32c0-17.7 14.3-32 32-32m32 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-35.4 192h198.8c15.8 0 28.6-12.8 28.6-28.6 0-7.3-2.8-14.4-7.9-19.7l-96.8-101.8c-6-6.4-14.4-9.9-23.2-9.9h-.3c-8.8 0-17.1 3.6-23.2 9.9l-96.7 101.8c-5.1 5.3-7.9 12.4-7.9 19.7 0 15.8 12.8 28.6 28.6 28.6"})
  );
}

export default LanCalendarImageSolid;
