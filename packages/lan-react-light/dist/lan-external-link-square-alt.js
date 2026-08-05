import React from 'react';

export function LanExternalLinkSquareAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm64 32c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM288 292.7 263.3 268c-3-3-7.1-4.7-11.3-4.7s-8.3 1.7-11.3 4.7L176 332.7 147.3 304l64.7-64.7c6.2-6.2 6.2-16.4 0-22.6L187.3 192H288zm8-132.7H168c-21.2 0-32 26-17 41l27 27-59 59c-9.4 9.4-9.4 24.6 0 33.9l40 40c9.4 9.4 24.6 9.4 33.9 0l59-59 27 27c15 15 41 4.3 41-17v-128c0-13.3-10.7-24-24-24z"})
  );
}

export default LanExternalLinkSquareAlt;
